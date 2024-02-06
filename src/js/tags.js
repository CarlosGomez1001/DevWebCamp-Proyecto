(function() {
    const tagsInput = document.querySelector('#tags_input');
    const tagsInputHidden = document.querySelector('[name="tags"]');

    if(tags_input) {  // Tiene este IF por fuera de las funciones por que se tiene que verificar primero que exsista tal elemento en el html
        const tagsDiv = document.querySelector('#tags');

        let tags = [];
        // Escuchar los cambios en el input
        tagsInput.addEventListener('keypress', guardarTag);
        
        function guardarTag(e) {

            if(e.keyCode === 44) {            
                
                if(e.target.value.trim() === '' || e.target.value < 1) {
                    return;
                }

                e.preventDefault();
                tags = [...tags, e.target.value.trim() ];
                tagsInput.value = ''; 
                console.log(tags);

                mostrarTags();
            }
        }


        function mostrarTags() {
            tagsDiv.textContent = '';
            tags.forEach(tag => {
                const etiqueta = document.createElement('LI');
                etiqueta.classList.add('formulario__tag');
                etiqueta.textContent = tag;
                etiqueta.ondblclick = eliminarTag;
                tagsDiv.appendChild(etiqueta);
            })

            actualizarInputHidden();
        }

        function eliminarTag(e) {
            e.target.remove();

            tags = tags.filter(tag => tag !== e.target.textContent);
            actualizarInputHidden();
        }

        function actualizarInputHidden() {
            tagsInputHidden.value = tags.toString();
        }

    }
})() //IIFE