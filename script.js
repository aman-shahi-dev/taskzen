
// Date and Time ka implementation

const timeElement = document.querySelector('.currentTime')

const dateElement = document.querySelector('.currentDate')

function updateClock() {
    const now = new Date();

    const rawHours = now.getHours();
    const hours = String(rawHours % 12 || 12).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const AmPm = rawHours >= 12 ? 'PM' : 'AM';

    timeElement.innerHTML = `<h1>${hours}:${minutes}:${seconds} ${AmPm}</h1>`;

    const date = now.getDate();
    const month = now.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const monthInWords = months[month];
    const year = now.getFullYear();

    dateElement.innerHTML = `<h1>${date} ${monthInWords} ${year}</h1>`;
}

updateClock();

setInterval(updateClock, 1000);


// Timer ka implementation

// Stopwatch ka implementation



const todoul = document.getElementById('todoul')

const addTaskBtn = document.getElementById('addTaskBtn')

addTaskBtn.addEventListener('click', () => {
    const li = document.createElement('li')
    li.innerHTML = `<textarea class="li-textarea">Task-1</textarea> <button>Edit</button> <button>Mark as completed</button> <button>Delete</button>`
    li.classList = 'li-class'
    todoul.prepend(li)
})