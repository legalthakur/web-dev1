const taskForm = document.getElementById('task-form');
const taskContainer = document.getElementById('task-container');
const tableBody = document.getElementById('table-body');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const description = taskForm.elements['description'].value;
  const severity = taskForm.elements['severity'].value;
  const assignedTo = taskForm.elements['assigned-to'].value;

  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  taskCard.innerHTML = `
    <p>Description: ${description}</p>
    <p>Severity: ${severity}</p>
    <p>Assigned To: ${assignedTo}</p>
    <p>Status: New</p>
    <button>Next</button>
  `;

  taskContainer.appendChild(taskCard);

  // Add a row to the table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${description}</td>
    <td>${severity}</td>
    <td>${assignedTo}</td>
    <td>New</td>
  `;
  tableBody.appendChild(row);
});

taskContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const taskCard = event.target.parentNode;
    const status = taskCard.querySelector('p:last-of-type');
    if (status.innerText === 'New') {
      status.innerText = 'In Progress';
    } else if (status.innerText === 'In Progress') {
      status.innerText = 'Completed';
      event.target.disabled = true;
    }

    // Update the status in the table
    const rowIndex = Array.from(tableBody.children).indexOf(taskCard.parentNode);
    tableBody.children[rowIndex].children[3].innerText = status.innerText;
  }
});
