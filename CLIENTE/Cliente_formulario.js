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
        
        // Validación del formulario
        document.getElementById('clientRegistrationForm').addEventListener('submit', function(e) {
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
            
            // Si todo está bien, mostrar mensaje de éxito
            alert('Registro exitoso! Su cuenta ha sido creada correctamente.');
            // this.submit(); // Descomentar para enviar realmente el formulario
        });
