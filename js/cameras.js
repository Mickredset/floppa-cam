class CameraSystem {
    constructor() {
        this.cameras = [
            { id: 'video-1', statusElement: document.querySelector('#camera-1 .status') },
            { id: 'video-2', statusElement: document.querySelector('#camera-2 .status') },
            { id: 'video-3', statusElement: document.querySelector('#camera-3 .status') },
            { id: 'video-4', statusElement: document.querySelector('#camera-4 .status') }
        ];
        this.streams = {};
    }

    async connectCamera(camera) {
        try {
            // Имитация подключения (в реальной системе здесь был бы доступ к камере через getUserMedia)
            const stream = await this.simulateCameraStream();
            
            const videoElement = document.getElementById(camera.id);
            videoElement.srcObject = stream;
            
            camera.statusElement.textContent = 'Статус: online';
            camera.statusElement.style.color = '#4caf50';
            
            // Скрыть оверлей "Нет сигнала"
            const overlay = videoElement.parentNode.querySelector('.overlay');
            if (overlay) overlay.style.display = 'none';
            
            this.streams[camera.id] = stream;
            
        } catch (error) {
            console.error(`Ошибка подключения камеры ${camera.id}:`, error);
            camera.statusElement.textContent = 'Статус: ошибка подключения';
            camera.statusElement.style.color = '#ff4d4d';
        }
    }

    simulateCameraStream() {
        return new Promise((resolve) => {
            // Создаем имитированный поток (в реальном приложении здесь был бы getUserMedia)
            const canvas = document.createElement('canvas');
            canvas.width = 640;
            canvas.height = 360;
            const ctx = canvas.getContext('2d');
            
            ctx.fillStyle = '#333';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = '30px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Камера активна',
