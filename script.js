// 全局变量
let originalImage = null;
let convertedCanvas = null;
let originalImageData = null;
let isFileDialogOpen = false; // 防止重复打开文件对话框

// DOM 元素
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const settingsSection = document.getElementById('settingsSection');
const previewSection = document.getElementById('previewSection');
const originalImageElement = document.getElementById('originalImage');
const convertedCanvasElement = document.getElementById('convertedCanvas');
const originalInfo = document.getElementById('originalInfo');
const convertedInfo = document.getElementById('convertedInfo');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const downloadBtn = document.getElementById('downloadBtn');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const dpiSelect = document.getElementById('dpi');
const presetButtons = document.querySelectorAll('.preset-btn');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    if (window.i18n && window.i18n.initLanguage) {
        window.i18n.initLanguage();
    }
    setupLanguageSelector();
});

// 初始化事件监听器
function initializeEventListeners() {
    // 文件上传
    fileInput.addEventListener('change', handleFileSelect);
    
    // 处理文件选择取消的情况
    fileInput.addEventListener('click', () => {
        // 重置文件输入框的值，确保能重复选择同一文件
        setTimeout(() => {
            if (fileInput.value === '') {
                isFileDialogOpen = false;
            }
        }, 100);
    });
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    
    // 只在上传区域点击时触发文件选择，避免重复
    uploadArea.addEventListener('click', (e) => {
        // 如果点击的是上传按钮或其子元素，不重复触发
        if (e.target.classList.contains('upload-btn') || e.target.closest('.upload-btn')) {
            return;
        }
        if (!isFileDialogOpen) {
            isFileDialogOpen = true;
            fileInput.click();
        }
    });
    
    // 按钮事件
    convertBtn.addEventListener('click', convertImage);
    resetBtn.addEventListener('click', resetApp);
    downloadBtn.addEventListener('click', downloadImage);
    
    // 上传按钮事件（阻止事件冒泡）
    document.querySelector('.upload-btn').addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡到uploadArea
        if (!isFileDialogOpen) {
            isFileDialogOpen = true;
            fileInput.click();
        }
    });
    
    // 预设尺寸按钮
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const width = parseFloat(btn.dataset.width);
            const height = parseFloat(btn.dataset.height);
            setSize(width, height);
            
            // 更新按钮状态
            presetButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // 尺寸输入变化时清除预设按钮状态
    widthInput.addEventListener('input', clearPresetSelection);
    heightInput.addEventListener('input', clearPresetSelection);
}

// 处理文件选择
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        processImageFile(file);
    }
    // 重置文件对话框状态
    isFileDialogOpen = false;
}

// 处理拖拽悬停
function handleDragOver(event) {
    event.preventDefault();
    uploadArea.classList.add('dragover');
}

// 处理拖拽离开
function handleDragLeave(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
}

// 处理文件拖拽
function handleDrop(event) {
    event.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (isValidImageFile(file)) {
            processImageFile(file);
        } else {
            showMessage('请选择有效的图片文件（JPG、PNG格式）', 'error');
        }
    }
}

// 验证图片文件
function isValidImageFile(file) {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return validTypes.includes(file.type);
}

// 处理图片文件
function processImageFile(file) {
    console.log('处理图片文件:', file.name, file.type);
    
    if (!isValidImageFile(file)) {
        showMessage('请选择有效的图片文件（JPG、PNG格式）', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        console.log('文件读取完成');
        const img = new Image();
        img.onload = function() {
            console.log('图片加载完成:', img.naturalWidth, 'x', img.naturalHeight);
            originalImage = img;
            originalImageData = {
                width: img.naturalWidth,
                height: img.naturalHeight,
                file: file
            };
            
            displayOriginalImage();
            showSettingsSection();
            showMessage('图片上传成功！请设置转换参数', 'success');
        };
        img.onerror = function() {
            console.error('图片加载失败');
            showMessage('图片加载失败，请重试', 'error');
        };
        img.src = e.target.result;
    };
    reader.onerror = function() {
        console.error('文件读取失败');
        showMessage('文件读取失败，请重试', 'error');
    };
    reader.readAsDataURL(file);
}

// 显示原始图片
function displayOriginalImage() {
    console.log('显示原始图片:', originalImage.src);
    originalImageElement.src = originalImage.src;
    originalInfo.innerHTML = `
        尺寸: ${originalImageData.width} × ${originalImageData.height} 像素<br>
        文件大小: ${formatFileSize(originalImageData.file.size)}<br>
        文件类型: ${originalImageData.file.type}
    `;
    
    // 确保图片加载完成后显示
    originalImageElement.onload = function() {
        console.log('原始图片加载完成');
        // 强制刷新显示
        originalImageElement.style.display = 'block';
        document.querySelector('.original-image').style.display = 'block';
    };
    
    originalImageElement.onerror = function() {
        console.error('原始图片加载失败');
        showMessage('图片加载失败，请重试', 'error');
    };
}

// 显示设置区域
function showSettingsSection() {
    console.log('显示设置区域');
    settingsSection.style.display = 'block';
    // 显示原始图片预览区域
    previewSection.style.display = 'block';
    // 隐藏转换后的图片部分，只显示原始图片
    const convertedImage = document.querySelector('.converted-image');
    const downloadSection = document.querySelector('.download-section');
    
    if (convertedImage) convertedImage.style.display = 'none';
    if (downloadSection) downloadSection.style.display = 'none';
    
    console.log('预览区域显示状态:', previewSection.style.display);
    console.log('设置区域显示状态:', settingsSection.style.display);
}

// 设置尺寸
function setSize(width, height) {
    widthInput.value = width;
    heightInput.value = height;
}

// 清除预设选择
function clearPresetSelection() {
    presetButtons.forEach(btn => btn.classList.remove('active'));
}

// 转换图片
function convertImage() {
    if (!originalImage) {
        showMessage('请先选择图片文件', 'error');
        return;
    }
    
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    const dpi = parseInt(dpiSelect.value);
    
    if (width < 1 || width > 10 || height < 1 || height > 10) {
        showMessage('尺寸必须在1-10cm之间', 'error');
        return;
    }
    
    // 计算像素尺寸
    const pixelWidth = Math.round(width * dpi / 2.54); // 1英寸 = 2.54厘米
    const pixelHeight = Math.round(height * dpi / 2.54);
    
    // 创建Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    
    // 设置高质量渲染
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // 先填充白色背景
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, pixelWidth, pixelHeight);
    
    // 计算图片在目标尺寸中的缩放比例，保持完整图片
    const aspectRatio = originalImageData.width / originalImageData.height;
    const targetAspectRatio = pixelWidth / pixelHeight;
    
    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
    
    if (aspectRatio > targetAspectRatio) {
        // 原图更宽，以宽度为准，上下留白
        drawWidth = pixelWidth;
        drawHeight = pixelWidth / aspectRatio;
        offsetY = (pixelHeight - drawHeight) / 2;
    } else {
        // 原图更高，以高度为准，左右留白
        drawHeight = pixelHeight;
        drawWidth = pixelHeight * aspectRatio;
        offsetX = (pixelWidth - drawWidth) / 2;
    }
    
    // 绘制原图（居中显示，不裁切）
    ctx.drawImage(originalImage, offsetX, offsetY, drawWidth, drawHeight);
    
    // 显示转换结果
    convertedCanvas = canvas;
    convertedCanvasElement.width = pixelWidth;
    convertedCanvasElement.height = pixelHeight;
    convertedCanvasElement.getContext('2d').drawImage(canvas, 0, 0);
    
    // 显示转换信息
    convertedInfo.innerHTML = `
        目标尺寸: ${width} × ${height} cm<br>
        像素尺寸: ${pixelWidth} × ${pixelHeight} 像素<br>
        分辨率: ${dpi} DPI<br>
        处理方式: 保持原图完整，添加白色背景<br>
        文件大小: 约 ${formatFileSize(pixelWidth * pixelHeight * 4)} (估算)
    `;
    
    // 显示完整的预览区域
    previewSection.style.display = 'block';
    const convertedImage = document.querySelector('.converted-image');
    const downloadSection = document.querySelector('.download-section');
    
    if (convertedImage) convertedImage.style.display = 'block';
    if (downloadSection) downloadSection.style.display = 'block';
    
    showMessage('图片转换完成！', 'success');
}

// 重置应用
function resetApp() {
    originalImage = null;
    convertedCanvas = null;
    originalImageData = null;
    
    fileInput.value = '';
    originalImageElement.src = '';
    convertedCanvasElement.width = 0;
    convertedCanvasElement.height = 0;
    
    originalInfo.innerHTML = '';
    convertedInfo.innerHTML = '';
    
    settingsSection.style.display = 'none';
    previewSection.style.display = 'none';
    const convertedImage = document.querySelector('.converted-image');
    const downloadSection = document.querySelector('.download-section');
    
    if (convertedImage) convertedImage.style.display = 'none';
    if (downloadSection) downloadSection.style.display = 'none';
    
    clearPresetSelection();
    
    showMessage('已重置，请重新选择图片', 'success');
}

// 下载图片
function downloadImage() {
    if (!convertedCanvas) {
        showMessage('请先转换图片', 'error');
        return;
    }
    
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    const dpi = parseInt(dpiSelect.value);
    
    // 创建下载链接
    const link = document.createElement('a');
    link.download = `converted_${width}x${height}cm_${dpi}dpi.png`;
    
    // 将Canvas转换为Blob
    convertedCanvas.toBlob(function(blob) {
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }, 'image/png');
    
    showMessage('图片下载开始！', 'success');
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 显示消息
function showMessage(message, type = 'info') {
    // 移除现有消息
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建新消息
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    
    // 插入到主容器中
    const main = document.querySelector('main');
    main.insertBefore(messageDiv, main.firstChild);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 3000);
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + O 打开文件
    if ((event.ctrlKey || event.metaKey) && event.key === 'o') {
        event.preventDefault();
        fileInput.click();
    }
    
    // Ctrl/Cmd + S 转换图片
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        if (originalImage) {
            convertImage();
        }
    }
    
    // Ctrl/Cmd + D 下载图片
    if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        if (convertedCanvas) {
            downloadImage();
        }
    }
});

// 添加触摸设备支持
if ('ontouchstart' in window) {
    // 为触摸设备优化交互
    uploadArea.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    uploadArea.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
}

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 防抖处理尺寸输入
const debouncedConvert = debounce(convertImage, 500);
widthInput.addEventListener('input', debouncedConvert);
heightInput.addEventListener('input', debouncedConvert);
dpiSelect.addEventListener('change', debouncedConvert);

// 语言选择器交互逻辑
function setupLanguageSelector() {
    const selector = document.getElementById('languageSelector');
    if (!selector) return;
    const btn = selector.querySelector('.current-language');
    const dropdown = selector.querySelector('.language-dropdown');
    btn.onclick = function(e) {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    };
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
    });
    selector.querySelectorAll('.lang-option').forEach(opt => {
        opt.onclick = function(e) {
            e.stopPropagation();
            window.i18n.changeLanguage(opt.dataset.lang);
            dropdown.style.display = 'none';
        };
    });
} 