<script>
        function getSelectedInterests() {
            const selectedInterests = [];
            const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
            checkboxes.forEach((checkbox) => {
                selectedInterests.push(checkbox.value);
            });
            alert('Selected Interests: ' + selectedInterests.join(', '));
        }
    </script>
