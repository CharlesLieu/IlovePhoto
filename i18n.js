// 国际化语言包
const i18n = {
    // 中文简体
    'zh-CN': {
        title: '照片尺寸转换器',
        subtitle: '支持JPG、PNG格式，可转换为1×1cm到10×10cm尺寸，保持原图完整',
        selectFile: '选择图片文件',
        supportedFormats: '支持 JPG、PNG 格式',
        chooseFile: '选择文件',
        conversionSettings: '转换设置',
        width: '宽度 (cm):',
        height: '高度 (cm):',
        resolution: '分辨率 (DPI):',
        dpi72: '72 DPI (屏幕显示)',
        dpi150: '150 DPI (一般打印)',
        dpi300: '300 DPI (高质量打印)',
        dpi600: '600 DPI (专业打印)',
        commonSizes: '常用尺寸',
        convertImage: '转换图片',
        resetSelection: '重新选择',
        previewEffect: '预览效果',
        originalImage: '原始图片',
        convertedImage: '转换后图片',
        downloadConverted: '下载转换后的图片',
        footer: '© 2024 照片尺寸转换器 - 纯前端处理，保护您的隐私',
        
        // 消息
        uploadSuccess: '图片上传成功！请设置转换参数',
        conversionComplete: '图片转换完成！',
        downloadStarted: '图片下载开始！',
        resetComplete: '已重置，请重新选择图片',
        selectImageFirst: '请先选择图片文件',
        invalidSize: '尺寸必须在1-10cm之间',
        selectValidImage: '请选择有效的图片文件（JPG、PNG格式）',
        imageLoadFailed: '图片加载失败，请重试',
        fileReadFailed: '文件读取失败，请重试',
        convertFirst: '请先转换图片',
        
        // 图片信息
        dimensions: '尺寸',
        fileSize: '文件大小',
        fileType: '文件类型',
        targetSize: '目标尺寸',
        pixelSize: '像素尺寸',
        processingMethod: '处理方式',
        keepOriginal: '保持原图完整，添加白色背景',
        estimatedSize: '约 {size} (估算)',
        
        // 快捷键
        shortcuts: '快捷键',
        openFile: '打开文件选择器',
        convert: '转换图片',
        download: '下载转换后的图片'
    },
    
    // 中文繁体
    'zh-TW': {
        title: '照片尺寸轉換器',
        subtitle: '支援JPG、PNG格式，可轉換為1×1cm到10×10cm尺寸，保持原圖完整',
        selectFile: '選擇圖片檔案',
        supportedFormats: '支援 JPG、PNG 格式',
        chooseFile: '選擇檔案',
        conversionSettings: '轉換設定',
        width: '寬度 (cm):',
        height: '高度 (cm):',
        resolution: '解析度 (DPI):',
        dpi72: '72 DPI (螢幕顯示)',
        dpi150: '150 DPI (一般列印)',
        dpi300: '300 DPI (高品質列印)',
        dpi600: '600 DPI (專業列印)',
        commonSizes: '常用尺寸',
        convertImage: '轉換圖片',
        resetSelection: '重新選擇',
        previewEffect: '預覽效果',
        originalImage: '原始圖片',
        convertedImage: '轉換後圖片',
        downloadConverted: '下載轉換後的圖片',
        footer: '© 2024 照片尺寸轉換器 - 純前端處理，保護您的隱私',
        
        // 消息
        uploadSuccess: '圖片上傳成功！請設定轉換參數',
        conversionComplete: '圖片轉換完成！',
        downloadStarted: '圖片下載開始！',
        resetComplete: '已重置，請重新選擇圖片',
        selectImageFirst: '請先選擇圖片檔案',
        invalidSize: '尺寸必須在1-10cm之間',
        selectValidImage: '請選擇有效的圖片檔案（JPG、PNG格式）',
        imageLoadFailed: '圖片載入失敗，請重試',
        fileReadFailed: '檔案讀取失敗，請重試',
        convertFirst: '請先轉換圖片',
        
        // 图片信息
        dimensions: '尺寸',
        fileSize: '檔案大小',
        fileType: '檔案類型',
        targetSize: '目標尺寸',
        pixelSize: '像素尺寸',
        processingMethod: '處理方式',
        keepOriginal: '保持原圖完整，添加白色背景',
        estimatedSize: '約 {size} (估算)',
        
        // 快捷键
        shortcuts: '快捷鍵',
        openFile: '開啟檔案選擇器',
        convert: '轉換圖片',
        download: '下載轉換後的圖片'
    },
    
    // 英语
    'en': {
        title: 'Photo Size Converter',
        subtitle: 'Support JPG, PNG formats, convert to 1×1cm to 10×10cm size, keep original image intact',
        selectFile: 'Select Image File',
        supportedFormats: 'Support JPG, PNG formats',
        chooseFile: 'Choose File',
        conversionSettings: 'Conversion Settings',
        width: 'Width (cm):',
        height: 'Height (cm):',
        resolution: 'Resolution (DPI):',
        dpi72: '72 DPI (Screen Display)',
        dpi150: '150 DPI (General Print)',
        dpi300: '300 DPI (High Quality Print)',
        dpi600: '600 DPI (Professional Print)',
        commonSizes: 'Common Sizes',
        convertImage: 'Convert Image',
        resetSelection: 'Reset Selection',
        previewEffect: 'Preview Effect',
        originalImage: 'Original Image',
        convertedImage: 'Converted Image',
        downloadConverted: 'Download Converted Image',
        footer: '© 2024 Photo Size Converter - Frontend Processing, Protect Your Privacy',
        
        // 消息
        uploadSuccess: 'Image uploaded successfully! Please set conversion parameters',
        conversionComplete: 'Image conversion completed!',
        downloadStarted: 'Image download started!',
        resetComplete: 'Reset complete, please select image again',
        selectImageFirst: 'Please select image file first',
        invalidSize: 'Size must be between 1-10cm',
        selectValidImage: 'Please select valid image file (JPG, PNG format)',
        imageLoadFailed: 'Image loading failed, please try again',
        fileReadFailed: 'File reading failed, please try again',
        convertFirst: 'Please convert image first',
        
        // 图片信息
        dimensions: 'Dimensions',
        fileSize: 'File Size',
        fileType: 'File Type',
        targetSize: 'Target Size',
        pixelSize: 'Pixel Size',
        processingMethod: 'Processing Method',
        keepOriginal: 'Keep original image intact, add white background',
        estimatedSize: 'About {size} (Estimated)',
        
        // 快捷键
        shortcuts: 'Shortcuts',
        openFile: 'Open file selector',
        convert: 'Convert image',
        download: 'Download converted image'
    },
    
    // 日语
    'ja': {
        title: '写真サイズ変換器',
        subtitle: 'JPG、PNG形式をサポート、1×1cmから10×10cmサイズに変換、元画像を保持',
        selectFile: '画像ファイルを選択',
        supportedFormats: 'JPG、PNG形式をサポート',
        chooseFile: 'ファイルを選択',
        conversionSettings: '変換設定',
        width: '幅 (cm):',
        height: '高さ (cm):',
        resolution: '解像度 (DPI):',
        dpi72: '72 DPI (画面表示)',
        dpi150: '150 DPI (一般印刷)',
        dpi300: '300 DPI (高品質印刷)',
        dpi600: '600 DPI (プロ印刷)',
        commonSizes: '一般的なサイズ',
        convertImage: '画像を変換',
        resetSelection: '選択をリセット',
        previewEffect: 'プレビュー効果',
        originalImage: '元画像',
        convertedImage: '変換後画像',
        downloadConverted: '変換後画像をダウンロード',
        footer: '© 2024 写真サイズ変換器 - フロントエンド処理、プライバシーを保護',
        
        // 消息
        uploadSuccess: '画像のアップロードが成功しました！変換パラメータを設定してください',
        conversionComplete: '画像変換が完了しました！',
        downloadStarted: '画像ダウンロードが開始されました！',
        resetComplete: 'リセット完了、画像を再選択してください',
        selectImageFirst: '先に画像ファイルを選択してください',
        invalidSize: 'サイズは1-10cmの間である必要があります',
        selectValidImage: '有効な画像ファイルを選択してください（JPG、PNG形式）',
        imageLoadFailed: '画像の読み込みに失敗しました、再試行してください',
        fileReadFailed: 'ファイルの読み込みに失敗しました、再試行してください',
        convertFirst: '先に画像を変換してください',
        
        // 图片信息
        dimensions: 'サイズ',
        fileSize: 'ファイルサイズ',
        fileType: 'ファイルタイプ',
        targetSize: '目標サイズ',
        pixelSize: 'ピクセルサイズ',
        processingMethod: '処理方法',
        keepOriginal: '元画像を保持、白い背景を追加',
        estimatedSize: '約 {size} (推定)',
        
        // 快捷键
        shortcuts: 'ショートカット',
        openFile: 'ファイル選択器を開く',
        convert: '画像を変換',
        download: '変換後画像をダウンロード'
    },
    
    // 韩语
    'ko': {
        title: '사진 크기 변환기',
        subtitle: 'JPG, PNG 형식 지원, 1×1cm에서 10×10cm 크기로 변환, 원본 이미지 유지',
        selectFile: '이미지 파일 선택',
        supportedFormats: 'JPG, PNG 형식 지원',
        chooseFile: '파일 선택',
        conversionSettings: '변환 설정',
        width: '너비 (cm):',
        height: '높이 (cm):',
        resolution: '해상도 (DPI):',
        dpi72: '72 DPI (화면 표시)',
        dpi150: '150 DPI (일반 인쇄)',
        dpi300: '300 DPI (고품질 인쇄)',
        dpi600: '600 DPI (전문 인쇄)',
        commonSizes: '일반적인 크기',
        convertImage: '이미지 변환',
        resetSelection: '선택 재설정',
        previewEffect: '미리보기 효과',
        originalImage: '원본 이미지',
        convertedImage: '변환된 이미지',
        downloadConverted: '변환된 이미지 다운로드',
        footer: '© 2024 사진 크기 변환기 - 프론트엔드 처리, 개인정보 보호',
        
        // 消息
        uploadSuccess: '이미지 업로드 성공! 변환 매개변수를 설정하세요',
        conversionComplete: '이미지 변환 완료!',
        downloadStarted: '이미지 다운로드 시작!',
        resetComplete: '재설정 완료, 이미지를 다시 선택하세요',
        selectImageFirst: '먼저 이미지 파일을 선택하세요',
        invalidSize: '크기는 1-10cm 사이여야 합니다',
        selectValidImage: '유효한 이미지 파일을 선택하세요 (JPG, PNG 형식)',
        imageLoadFailed: '이미지 로딩 실패, 다시 시도하세요',
        fileReadFailed: '파일 읽기 실패, 다시 시도하세요',
        convertFirst: '먼저 이미지를 변환하세요',
        
        // 图片信息
        dimensions: '크기',
        fileSize: '파일 크기',
        fileType: '파일 유형',
        targetSize: '목표 크기',
        pixelSize: '픽셀 크기',
        processingMethod: '처리 방법',
        keepOriginal: '원본 이미지 유지, 흰색 배경 추가',
        estimatedSize: '약 {size} (추정)',
        
        // 快捷键
        shortcuts: '단축키',
        openFile: '파일 선택기 열기',
        convert: '이미지 변환',
        download: '변환된 이미지 다운로드'
    },
    
    // 法语
    'fr': {
        title: 'Convertisseur de Taille de Photo',
        subtitle: 'Support JPG, PNG formats, convertir en taille 1×1cm à 10×10cm, garder l\'image originale intacte',
        selectFile: 'Sélectionner un Fichier Image',
        supportedFormats: 'Support JPG, PNG formats',
        chooseFile: 'Choisir un Fichier',
        conversionSettings: 'Paramètres de Conversion',
        width: 'Largeur (cm):',
        height: 'Hauteur (cm):',
        resolution: 'Résolution (DPI):',
        dpi72: '72 DPI (Affichage Écran)',
        dpi150: '150 DPI (Impression Générale)',
        dpi300: '300 DPI (Impression Haute Qualité)',
        dpi600: '600 DPI (Impression Professionnelle)',
        commonSizes: 'Tailles Courantes',
        convertImage: 'Convertir l\'Image',
        resetSelection: 'Réinitialiser la Sélection',
        previewEffect: 'Effet de Prévisualisation',
        originalImage: 'Image Originale',
        convertedImage: 'Image Convertie',
        downloadConverted: 'Télécharger l\'Image Convertie',
        footer: '© 2024 Convertisseur de Taille de Photo - Traitement Frontend, Protéger Votre Vie Privée',
        
        // 消息
        uploadSuccess: 'Image téléchargée avec succès! Veuillez définir les paramètres de conversion',
        conversionComplete: 'Conversion d\'image terminée!',
        downloadStarted: 'Téléchargement d\'image commencé!',
        resetComplete: 'Réinitialisation terminée, veuillez sélectionner l\'image à nouveau',
        selectImageFirst: 'Veuillez d\'abord sélectionner un fichier image',
        invalidSize: 'La taille doit être entre 1-10cm',
        selectValidImage: 'Veuillez sélectionner un fichier image valide (format JPG, PNG)',
        imageLoadFailed: 'Échec du chargement de l\'image, veuillez réessayer',
        fileReadFailed: 'Échec de la lecture du fichier, veuillez réessayer',
        convertFirst: 'Veuillez d\'abord convertir l\'image',
        
        // 图片信息
        dimensions: 'Dimensions',
        fileSize: 'Taille du Fichier',
        fileType: 'Type de Fichier',
        targetSize: 'Taille Cible',
        pixelSize: 'Taille en Pixels',
        processingMethod: 'Méthode de Traitement',
        keepOriginal: 'Garder l\'image originale intacte, ajouter un fond blanc',
        estimatedSize: 'Environ {size} (Estimé)',
        
        // 快捷键
        shortcuts: 'Raccourcis',
        openFile: 'Ouvrir le sélecteur de fichier',
        convert: 'Convertir l\'image',
        download: 'Télécharger l\'image convertie'
    },
    
    // 德语
    'de': {
        title: 'Foto-Größenkonverter',
        subtitle: 'Unterstützt JPG, PNG Formate, konvertiert zu 1×1cm bis 10×10cm Größe, behält Originalbild intakt',
        selectFile: 'Bilddatei Auswählen',
        supportedFormats: 'Unterstützt JPG, PNG Formate',
        chooseFile: 'Datei Auswählen',
        conversionSettings: 'Konvertierungseinstellungen',
        width: 'Breite (cm):',
        height: 'Höhe (cm):',
        resolution: 'Auflösung (DPI):',
        dpi72: '72 DPI (Bildschirmanzeige)',
        dpi150: '150 DPI (Allgemeiner Druck)',
        dpi300: '300 DPI (Hochwertiger Druck)',
        dpi600: '600 DPI (Professioneller Druck)',
        commonSizes: 'Häufige Größen',
        convertImage: 'Bild Konvertieren',
        resetSelection: 'Auswahl Zurücksetzen',
        previewEffect: 'Vorschau-Effekt',
        originalImage: 'Originalbild',
        convertedImage: 'Konvertiertes Bild',
        downloadConverted: 'Konvertiertes Bild Herunterladen',
        footer: '© 2024 Foto-Größenkonverter - Frontend-Verarbeitung, Schutz Ihrer Privatsphäre',
        
        // 消息
        uploadSuccess: 'Bild erfolgreich hochgeladen! Bitte Konvertierungsparameter einstellen',
        conversionComplete: 'Bildkonvertierung abgeschlossen!',
        downloadStarted: 'Bilddownload gestartet!',
        resetComplete: 'Zurücksetzen abgeschlossen, bitte Bild erneut auswählen',
        selectImageFirst: 'Bitte zuerst Bilddatei auswählen',
        invalidSize: 'Größe muss zwischen 1-10cm liegen',
        selectValidImage: 'Bitte gültige Bilddatei auswählen (JPG, PNG Format)',
        imageLoadFailed: 'Bildladung fehlgeschlagen, bitte erneut versuchen',
        fileReadFailed: 'Dateilesung fehlgeschlagen, bitte erneut versuchen',
        convertFirst: 'Bitte zuerst Bild konvertieren',
        
        // 图片信息
        dimensions: 'Abmessungen',
        fileSize: 'Dateigröße',
        fileType: 'Dateityp',
        targetSize: 'Zielgröße',
        pixelSize: 'Pixelgröße',
        processingMethod: 'Verarbeitungsmethode',
        keepOriginal: 'Originalbild intakt halten, weißen Hintergrund hinzufügen',
        estimatedSize: 'Etwa {size} (Geschätzt)',
        
        // 快捷键
        shortcuts: 'Tastenkombinationen',
        openFile: 'Dateiauswahl öffnen',
        convert: 'Bild konvertieren',
        download: 'Konvertiertes Bild herunterladen'
    },
    
    // 西班牙语
    'es': {
        title: 'Convertidor de Tamaño de Foto',
        subtitle: 'Soporta formatos JPG, PNG, convierte a tamaño 1×1cm a 10×10cm, mantiene imagen original intacta',
        selectFile: 'Seleccionar Archivo de Imagen',
        supportedFormats: 'Soporta formatos JPG, PNG',
        chooseFile: 'Elegir Archivo',
        conversionSettings: 'Configuración de Conversión',
        width: 'Ancho (cm):',
        height: 'Alto (cm):',
        resolution: 'Resolución (DPI):',
        dpi72: '72 DPI (Pantalla)',
        dpi150: '150 DPI (Impresión General)',
        dpi300: '300 DPI (Impresión Alta Calidad)',
        dpi600: '600 DPI (Impresión Profesional)',
        commonSizes: 'Tamaños Comunes',
        convertImage: 'Convertir Imagen',
        resetSelection: 'Reiniciar Selección',
        previewEffect: 'Efecto de Vista Previa',
        originalImage: 'Imagen Original',
        convertedImage: 'Imagen Convertida',
        downloadConverted: 'Descargar Imagen Convertida',
        footer: '© 2024 Convertidor de Tamaño de Foto - Procesamiento Frontend, Proteger Su Privacidad',
        
        // 消息
        uploadSuccess: '¡Imagen subida exitosamente! Por favor configure los parámetros de conversión',
        conversionComplete: '¡Conversión de imagen completada!',
        downloadStarted: '¡Descarga de imagen iniciada!',
        resetComplete: 'Reinicio completado, por favor seleccione imagen nuevamente',
        selectImageFirst: 'Por favor seleccione archivo de imagen primero',
        invalidSize: 'El tamaño debe estar entre 1-10cm',
        selectValidImage: 'Por favor seleccione archivo de imagen válido (formato JPG, PNG)',
        imageLoadFailed: 'Error al cargar imagen, por favor intente de nuevo',
        fileReadFailed: 'Error al leer archivo, por favor intente de nuevo',
        convertFirst: 'Por favor convierta imagen primero',
        
        // 图片信息
        dimensions: 'Dimensiones',
        fileSize: 'Tamaño del Archivo',
        fileType: 'Tipo de Archivo',
        targetSize: 'Tamaño Objetivo',
        pixelSize: 'Tamaño en Píxeles',
        processingMethod: 'Método de Procesamiento',
        keepOriginal: 'Mantener imagen original intacta, agregar fondo blanco',
        estimatedSize: 'Aproximadamente {size} (Estimado)',
        
        // 快捷键
        shortcuts: 'Atajos',
        openFile: 'Abrir selector de archivo',
        convert: 'Convertir imagen',
        download: 'Descargar imagen convertida'
    },
    
    // 俄语
    'ru': {
        title: 'Конвертер Размера Фотографии',
        subtitle: 'Поддерживает форматы JPG, PNG, конвертирует в размер 1×1cm до 10×10cm, сохраняет оригинальное изображение',
        selectFile: 'Выбрать Файл Изображения',
        supportedFormats: 'Поддерживает форматы JPG, PNG',
        chooseFile: 'Выбрать Файл',
        conversionSettings: 'Настройки Конвертации',
        width: 'Ширина (см):',
        height: 'Высота (см):',
        resolution: 'Разрешение (DPI):',
        dpi72: '72 DPI (Экран)',
        dpi150: '150 DPI (Обычная Печать)',
        dpi300: '300 DPI (Высокое Качество)',
        dpi600: '600 DPI (Профессиональная Печать)',
        commonSizes: 'Обычные Размеры',
        convertImage: 'Конвертировать Изображение',
        resetSelection: 'Сбросить Выбор',
        previewEffect: 'Эффект Предварительного Просмотра',
        originalImage: 'Оригинальное Изображение',
        convertedImage: 'Конвертированное Изображение',
        downloadConverted: 'Скачать Конвертированное Изображение',
        footer: '© 2024 Конвертер Размера Фотографии - Фронтенд Обработка, Защита Вашей Конфиденциальности',
        
        // 消息
        uploadSuccess: 'Изображение успешно загружено! Пожалуйста, установите параметры конвертации',
        conversionComplete: 'Конвертация изображения завершена!',
        downloadStarted: 'Загрузка изображения началась!',
        resetComplete: 'Сброс завершен, пожалуйста, выберите изображение снова',
        selectImageFirst: 'Пожалуйста, сначала выберите файл изображения',
        invalidSize: 'Размер должен быть между 1-10см',
        selectValidImage: 'Пожалуйста, выберите действительный файл изображения (формат JPG, PNG)',
        imageLoadFailed: 'Ошибка загрузки изображения, пожалуйста, попробуйте снова',
        fileReadFailed: 'Ошибка чтения файла, пожалуйста, попробуйте снова',
        convertFirst: 'Пожалуйста, сначала конвертируйте изображение',
        
        // 图片信息
        dimensions: 'Размеры',
        fileSize: 'Размер Файла',
        fileType: 'Тип Файла',
        targetSize: 'Целевой Размер',
        pixelSize: 'Размер в Пикселях',
        processingMethod: 'Метод Обработки',
        keepOriginal: 'Сохранить оригинальное изображение, добавить белый фон',
        estimatedSize: 'Примерно {size} (Оценка)',
        
        // 快捷键
        shortcuts: 'Горячие Клавиши',
        openFile: 'Открыть селектор файлов',
        convert: 'Конвертировать изображение',
        download: 'Скачать конвертированное изображение'
    }
};

// 当前语言
let currentLanguage = 'zh-CN';

// 获取翻译文本
function t(key, params = {}) {
    const text = i18n[currentLanguage][key] || i18n['en'][key] || key;
    return text.replace(/\{(\w+)\}/g, (match, param) => params[param] || match);
}

// 切换语言
function changeLanguage(lang) {
    if (i18n[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        updatePageLanguage();
    }
}

// 更新页面语言
function updatePageLanguage() {
    // 更新页面标题
    document.title = t('title');
    
    // 更新头部
    document.querySelector('header h1').textContent = t('title');
    document.querySelector('header p').textContent = t('subtitle');
    
    // 更新上传区域
    document.querySelector('.upload-content h3').textContent = t('selectFile');
    document.querySelector('.upload-content p').textContent = t('supportedFormats');
    document.querySelector('.upload-btn').textContent = t('chooseFile');
    
    // 更新设置区域
    document.querySelector('.settings-section h2').textContent = t('conversionSettings');
    document.querySelector('label[for="width"]').textContent = t('width');
    document.querySelector('label[for="height"]').textContent = t('height');
    document.querySelector('label[for="dpi"]').textContent = t('resolution');
    
    // 更新DPI选项
    const dpiSelect = document.getElementById('dpi');
    dpiSelect.options[0].text = t('dpi72');
    dpiSelect.options[1].text = t('dpi150');
    dpiSelect.options[2].text = t('dpi300');
    dpiSelect.options[3].text = t('dpi600');
    
    // 更新预设尺寸
    document.querySelector('.preset-sizes h3').textContent = t('commonSizes');
    
    // 更新按钮
    document.getElementById('convertBtn').textContent = t('convertImage');
    document.getElementById('resetBtn').textContent = t('resetSelection');
    
    // 更新预览区域
    document.querySelector('.preview-section h2').textContent = t('previewEffect');
    document.querySelector('.original-image h3').textContent = t('originalImage');
    document.querySelector('.converted-image h3').textContent = t('convertedImage');
    document.getElementById('downloadBtn').textContent = t('downloadConverted');
    
    // 更新页脚
    document.querySelector('footer p').textContent = t('footer');
    
    // 更新语言选择器
    updateLanguageSelector();
}

// 更新语言选择器
function updateLanguageSelector() {
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        const currentOption = languageSelector.querySelector('.current-language');
        if (currentOption) {
            currentOption.textContent = getLanguageName(currentLanguage);
        }
    }
}

// 获取语言名称
function getLanguageName(code) {
    const languageNames = {
        'zh-CN': '中文简体',
        'zh-TW': '中文繁體',
        'en': 'English',
        'ja': '日本語',
        'ko': '한국어',
        'fr': 'Français',
        'de': 'Deutsch',
        'es': 'Español',
        'ru': 'Русский'
    };
    return languageNames[code] || code;
}

// 初始化语言
function initLanguage() {
    // 从本地存储获取用户首选语言
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && i18n[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        // 检测浏览器语言
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        
        // 映射浏览器语言到支持的语言
        const langMap = {
            'zh': 'zh-CN',
            'ja': 'ja',
            'ko': 'ko',
            'fr': 'fr',
            'de': 'de',
            'es': 'es',
            'ru': 'ru'
        };
        
        if (langMap[langCode]) {
            currentLanguage = langMap[langCode];
        }
    }
    
    updatePageLanguage();
}

// 导出函数供其他文件使用
window.i18n = {
    t,
    changeLanguage,
    initLanguage,
    currentLanguage: () => currentLanguage
}; 