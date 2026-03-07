const loadAllIssues = async() => {
    showAllBtnActive();

    showSpinner();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const object = await res.json();
    const data = object.data;
    document.getElementById('total').innerText = data.length;
    displayAllIssues(data);
}

const displayAllIssues = (data) => {
    const allIssuesContainer = document.getElementById('issueList');
    allIssuesContainer.innerHTML = '';

    data.forEach(singleData => {
        allIssuesContainer.innerHTML += `
            <div id="${singleData.id}" class="card bg-base-100 card-xl shadow-sm bg-base-100 border border-[#ffffffFF] rounded-lg py-6 px-4 mx-6 space-y-3 cursor-pointer" onclick="loadModal('${singleData.id}')">
                <div class="flex justify-between">
                    <img src="./assets/Open-Status.png" alt="" srcset="">
                    <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${singleData.priority}</div>
                </div>
                <h2 class="font-semibold text-[#1f2937FF]">${singleData.title}</h2>
                <p class="text-[#64748bFF]">${singleData.description}</p>
                <div>
                    <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
                        <i class="fa-solid fa-suitcase fa-rotate-180"></i>
                        ${singleData.labels[0] ? singleData.labels[0] : ''}
                    </div>
                    <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
                        <i class="fa-solid fa-futbol"></i>
                        ${singleData.labels[1] ? singleData.labels[1] : ''}
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="space-y-2">
                    <p class="text-[#64748bFF] text-xs">#${singleData.id} by ${singleData.author}</p>
                    <p class="text-[#64748bFF] text-xs">${singleData.createdAt}</p>
                </div>
            </div>
        `;
        if (singleData.status === 'open') {
            document.getElementById(`${singleData.id}`).classList.add('border-t-4', 'border-t-green-600');
        }
        else {
            document.getElementById(`${singleData.id}`).classList.add('border-t-4', 'border-t-purple-600');
        }
    });

    hideSpinner();
}


const loadOpenIssues = async() => {
    showOpenBtnActive();

    showSpinner();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const object = await res.json();
    const data = object.data;
    const openData = data.filter(singleOpenData => singleOpenData.status === 'open');
    document.getElementById('total').innerText = openData.length;
    showOpenIssues(openData);
}


const showOpenIssues = (openData) => {
    document.getElementById('issueList').innerHTML = '';
    openData.forEach(singleData => {
        document.getElementById('issueList').innerHTML += `
        <div id="${singleData.id}" class="card bg-base-100 card-xl shadow-sm bg-base-100 border border-[#ffffffFF] rounded-lg py-6 px-4 mx-6 space-y-3 cursor-pointer" onclick="loadModal('${singleData.id}')">
        <div class="flex justify-between">
        <img src="./assets/Open-Status.png" alt="" srcset="">
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${singleData.priority}</div>
        </div>
        <h2 class="font-semibold text-[#1f2937FF]">${singleData.title}</h2>
        <p class="text-[#64748bFF]">${singleData.description}</p>
        <div>
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
        <i class="fa-solid fa-suitcase fa-rotate-180"></i>
        ${singleData.labels[0] ? singleData.labels[0] : ''}
        </div>
                    <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
                    <i class="fa-solid fa-futbol"></i>
                    ${singleData.labels[1] ? singleData.labels[1] : ''}
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="space-y-2">
                    <p class="text-[#64748bFF] text-xs">#${singleData.id} by ${singleData.author}</p>
                    <p class="text-[#64748bFF] text-xs">${singleData.createdAt}</p>
                    </div>
                    </div>
                    `;
        document.getElementById(`${singleData.id}`).classList.add('border-t-4', 'border-t-green-600');
    })

    hideSpinner();
};

const loadClosedIssues = async() => {
    showClosedBtnActive();

    showSpinner();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const object = await res.json();
    const data = object.data;
    const closeData = data.filter(singleCloseData => singleCloseData.status === 'closed');
    document.getElementById('total').innerText = closeData.length;
    showClosedIssues(closeData);
}

const showClosedIssues = (closeData) => {
    document.getElementById('issueList').innerHTML = '';
    closeData.forEach(singleData => {
        document.getElementById('issueList').innerHTML += `
        <div id="${singleData.id}" class="card bg-base-100 card-xl shadow-sm bg-base-100 border border-[#ffffffFF] rounded-lg py-6 px-4 mx-6 space-y-3 cursor-pointer" onclick="loadModal('${singleData.id}')">
        <div class="flex justify-between">
        <img src="./assets/Open-Status.png" alt="" srcset="">
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${singleData.priority}</div>
        </div>
        <h2 class="font-semibold text-[#1f2937FF]">${singleData.title}</h2>
        <p class="text-[#64748bFF]">${singleData.description}</p>
        <div>
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
        <i class="fa-solid fa-suitcase fa-rotate-180"></i>
        ${singleData.labels[0] ? singleData.labels[0] : ''}
        </div>
                    <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
                    <i class="fa-solid fa-futbol"></i>
                    ${singleData.labels[1] ? singleData.labels[1] : ''}
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="space-y-2">
                    <p class="text-[#64748bFF] text-xs">#${singleData.id} by ${singleData.author}</p>
                    <p class="text-[#64748bFF] text-xs">${singleData.createdAt}</p>
                    </div>
                    </div>
                    `;
        document.getElementById(`${singleData.id}`).classList.add('border-t-4', 'border-t-purple-600');
    })
    hideSpinner();
};

const loadModal = async (id) => {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const object = await res.json();
    const data = object.data;
    showModal(data);
}

const showModal = (data) => {
    document.getElementById('modal').innerHTML = `
      <div class="modal-box space-y-6">
        <h3 class="text-2xl font-bold text-[#1f2937FF]">${data.title ? data.title : 'No title'}</h3>

        <div class="flex items-center">
          <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${data.status ? data.status : 'unknown'}</div>
          <p class="text-[#64748bFF] text-xs mb-4 mr-2"><span class="font-semibold text-3xl rounded-full mr-1">.</span>${data.author ? data.author : 'Unknown'}</p>
          <p class="text-[#64748bFF] text-xs mb-4"><span class="font-semibold text-3xl rounded-full mr-1">.</span>${data.createdAt ? data.createdAt : ''}</p>
        </div>

        <div class="space-x-2">
          <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
            <i class="fa-solid fa-suitcase fa-rotate-180"></i>
            ${data.labels && data.labels[0] ? data.labels[0] : ''}
          </div>
          <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
            <i class="fa-solid fa-futbol"></i>
            ${data.labels && data.labels[1] ? data.labels[1] : ''}
          </div>
        </div>

        <p class="text-[#64748bFF]">${data.description ? data.description : 'No description'}</p>

        <div class="bg-gray-300 grid justify-between grid-cols-2 p-4 rounded-lg">
          <div>
            <p class="text-[#64748bFF]">Assignee:</p>
            <p class="text-[#1f2937FF] font-semibold">${data.assignee ? data.assignee : (data.author ? data.author : 'Unassigned')}</p>
          </div>
          <div>
            <p class="text-[#64748bFF]">Priority:</p>
            <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${data.priority ? data.priority : 'N/A'}</div>
          </div>
        </div>

        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    `;
    const modal = document.getElementById('modal');
    modal.showModal();
    hideSpinner();

}

const loadSearchIssues = async () => {
    const searchInputValue = document.getElementById('searchInputValue').value.trim().toLowerCase();

       if (!searchInputValue) {
        document.getElementById('total').innerText = 0;
        return;
    }

    showSpinner();


    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const object = await res.json();
    const data = object.data;

    showSearchIssues(data, searchInputValue);
   
}

const showSearchIssues = (data, searchInputValue) => {

    const searchedData = data.filter(singleData => singleData.description.trim().toLowerCase().includes(searchInputValue));


    document.getElementById('total').innerText = searchedData.length;
    const allIssuesContainer = document.getElementById('issueList');
    allIssuesContainer.innerHTML = '';

    searchedData.forEach(singleData => {
        allIssuesContainer.innerHTML += `
            <div id="${singleData.id}" class="card bg-base-100 card-xl shadow-sm bg-base-100 border border-[#ffffffFF] rounded-lg py-6 px-4 mx-6 space-y-3 cursor-pointer" onclick="loadModal('${singleData.id}')">
                <div class="flex justify-between">
                    <img src="./assets/Open-Status.png" alt="" srcset="">
                    <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${singleData.priority}</div>
                </div>
                <h2 class="font-semibold text-[#1f2937FF]">${singleData.title}</h2>
                <p class="text-[#64748bFF]">${singleData.description}</p>
                <div>
                    <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
                        <i class="fa-solid fa-suitcase fa-rotate-180"></i>
                        ${singleData.labels[0] ? singleData.labels[0] : ''}
                    </div>
                    <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
                        <i class="fa-solid fa-futbol"></i>
                        ${singleData.labels[1] ? singleData.labels[1] : ''}
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="space-y-2">
                    <p class="text-[#64748bFF] text-xs">#${singleData.id} by ${singleData.author}</p>
                    <p class="text-[#64748bFF] text-xs">${singleData.createdAt}</p>
                </div>
            </div>
        `;
    });

    hideSpinner();
};

const showSpinner = () => {
  const spinner = document.getElementById('spinner');
  if (spinner) spinner.classList.remove('hidden');
   
}

const hideSpinner = () => {
  const spinner = document.getElementById('spinner');
  if (spinner) spinner.classList.add('hidden');
}

const allbtn = document.getElementById('allBtn');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

const showAllBtnActive = () => {
    allbtn.classList.add('btn-active');
    allbtn.classList.remove('btn-inactive');

    openBtn.classList.remove('btn-active');
    openBtn.classList.add('btn-inactive');

    closeBtn.classList.remove('btn-active');
    closeBtn.classList.add('btn-inactive');
}


const showOpenBtnActive = () => {
    allbtn.classList.remove('btn-active');
    allbtn.classList.add('btn-inactive');

    openBtn.classList.add('btn-active');
    openBtn.classList.remove('btn-inactive');

    closeBtn.classList.remove('btn-active');
    closeBtn.classList.add('btn-inactive');
}

const showClosedBtnActive = () => {
    allbtn.classList.remove('btn-active');
    allbtn.classList.add('btn-inactive');

    openBtn.classList.remove('btn-active');
    openBtn.classList.add('btn-inactive');

    closeBtn.classList.remove('btn-inactive');
    closeBtn.classList.add('btn-active');
}

const inactiveAllBtns = () => {
    allbtn.classList.remove('btn-active');
    allbtn.classList.add('btn-inactive');
    openBtn.classList.remove('btn-active');
    openBtn.classList.add('btn-inactive');
    closeBtn.classList.remove('btn-active');
    closeBtn.classList.add('btn-inactive');
}

loadAllIssues();
