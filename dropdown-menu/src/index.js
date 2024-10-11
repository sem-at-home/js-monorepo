import './styles.css'

function dropdownToggle() {
    const dropdownContent = document.querySelector('.dropdown-content')
    dropdownContent.classList.toggle('show')
};

window.onclick = (event) => {
    const dropdownContent = document.querySelector('.dropdown-content')
    if (event.target.matches('.dropdown-button')) {
        dropdownToggle()
    } else if (dropdownContent.classList.contains('show')) {
        dropdownToggle()
    }
}