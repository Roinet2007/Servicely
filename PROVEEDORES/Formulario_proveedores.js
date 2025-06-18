        // Array para almacenar los servicios
        let services = [];
        
        // Manejar cambio de foto de perfil
        document.getElementById('profile-upload').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('profile-pic').src = event.target.result;
                }
                reader.readAsDataURL(file);
            }
        });
        
        // Manejar subida de documentos
        function setupDocumentUpload(boxId, inputId, previewId) {
            const box = document.getElementById(boxId);
            const input = document.getElementById(inputId);
            const preview = previewId ? document.getElementById(previewId) : null;
            
            box.addEventListener('click', function() {
                input.click();
            });
            
            input.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    if (preview) {
                        const reader = new FileReader();
                        reader.onload = function(event) {
                            preview.src = event.target.result;
                            preview.style.display = 'block';
                            box.querySelector('i').style.display = 'none';
                            box.querySelector('span').style.display = 'none';
                        }
                        reader.readAsDataURL(file);
                    }
                }
            });
        }
        
        setupDocumentUpload('frontDniBox', 'frontDni', 'frontDniPreview');
        setupDocumentUpload('backDniBox', 'backDni', 'backDniPreview');
        setupDocumentUpload('certificateBox', 'certificate', null);
        
        // Función para renderizar los servicios
        function renderServices() {
            const container = document.getElementById('servicesContainer');
            container.innerHTML = '';
            
            services.forEach((service, index) => {
                const tag = document.createElement('div');
                tag.className = 'service-tag';
                tag.innerHTML = `
                    ${service}
                    <button type="button" onclick="removeService(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                container.appendChild(tag);
            });
            
            // Actualizar el input hidden con los servicios
            updateServicesInput();
        }
        
        // Función para agregar un servicio
        function addService() {
            const input = document.getElementById('customService');
            const service = input.value.trim();
            
            if (service && !services.includes(service)) {
                services.push(service);
                renderServices();
                input.value = '';
                input.focus();
            } else if (!service) {
                alert('Por favor ingrese un servicio válido');
            } else {
                alert('Este servicio ya ha sido agregado');
            }
        }
        
        // Función para eliminar un servicio
        function removeService(index) {
            services.splice(index, 1);
            renderServices();
        }
        
        // Función para actualizar el input hidden con los servicios
        function updateServicesInput() {
            // Eliminar cualquier input existente
            const existingInputs = document.querySelectorAll('input[name="services"]');
            existingInputs.forEach(input => input.remove());
            
            // Agregar nuevos inputs hidden para cada servicio
            services.forEach(service => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'services';
                input.value = service;
                document.getElementById('providerRegistrationForm').appendChild(input);
            });
        }
        
        // Evento para agregar servicio al hacer clic en el botón
        document.getElementById('addServiceBtn').addEventListener('click', addService);
        
        // Evento para agregar servicio al presionar Enter
        document.getElementById('customService').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addService();
            }
        });
        
        // Validación del formulario
        document.getElementById('providerRegistrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar que las contraseñas coincidan
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            // Validar documentos de identidad
            const frontDni = document.getElementById('frontDni').files[0];
            const backDni = document.getElementById('backDni').files[0];
            
            if (!frontDni || !backDni) {
                alert('Debe subir ambas fotos de la cédula (frontal y trasera)');
                return;
            }
            
            // Validar que se hayan agregado servicios
            if (services.length === 0) {
                alert('Debe agregar al menos un servicio que ofrezca');
                return;
            }
            
            // Validar que haya al menos un método de pago seleccionado
            const paymentMethods = document.querySelectorAll('input[name="paymentMethods"]:checked');
            if (paymentMethods.length === 0) {
                alert('Debe seleccionar al menos un método de pago');
                return;
            }
            
            // Si todo está bien, mostrar mensaje de éxito
            alert('Registro exitoso! Su cuenta está siendo verificada y estará activa pronto.');
            // this.submit(); // Descomentar para enviar realmente el formulario
        });
