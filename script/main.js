const loadAllIssues = async() => {
  showSpinner();
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
  const object = await res.json();
  const data = object.data;
  document.getElementById('total').innerText = data.length;
  displayAllIssues(data);
};

const displayAllIssues = (data) => {
    data.forEach(singleData => {
        document.getElementById('allIssues').innerHTML += `
            <div id="${singleData.id}" class="card bg-base-100 card-xl shadow-sm bg-base-100 border border-[#ffffffFF] rounded-lg py-6 px-4 mx-6 space-y-3">
                <div class="flex justify-between">
                    <img src="./assets/Open-Status.png" alt="" srcset="">
                    <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${singleData.priority}</div>
                </div>
                <h2 class="font-semibold text-[#1f2937FF]">${singleData.title}</h2>
                <p class="text-[#64748bFF]">${singleData.description}</p>
                <div>
                    <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
                        <i class="fa-solid fa-suitcase fa-rotate-180"></i>
                        ${singleData.labels[0]}
                    </div>
                    <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
                        <i class="fa-solid fa-futbol"></i>
                        ${singleData.labels[1]}
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="space-y-2">
                    <p class="text-[#64748bFF] text-xs">#${singleData.id} by ${singleData.author}</p>
                    <p class="text-[#64748bFF] text-xs">${singleData.createdAt}</p>
                </div>
            </div>
        `;
        if(singleData.status === 'open') {
            document.getElementById(`${singleData.id}`).classList.add('border-t-4', 'border-t-green-600');
        }
        else{
            document.getElementById(`${singleData.id}`).classList.add('border-t-4', 'border-t-purple-600');
        }
        hideSpinner();
    });


}



const loadOpenIssues = async() => {
    showSpinner();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const object = await res.json();
    const data = object.data;
    const openData = data.filter(singleOpenData => singleOpenData.status === 'open');
    document.getElementById('total').innerText = openData.length;
    showOpenIssues(openData);
};



const showOpenIssues = (openData) => {
    document.getElementById('allIssues').innerHTML = '';
    openData.forEach(singleData => {
        document.getElementById('allIssues').innerHTML += `
        <div id="${singleData.id}" class="card bg-base-100 card-xl shadow-sm bg-base-100 border border-[#ffffffFF] rounded-lg py-6 px-4 mx-6 space-y-3">
        <div class="flex justify-between">
        <img src="./assets/Open-Status.png" alt="" srcset="">
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${singleData.priority}</div>
        </div>
        <h2 class="font-semibold text-[#1f2937FF]">${singleData.title}</h2>
        <p class="text-[#64748bFF]">${singleData.description}</p>
        <div>
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
        <i class="fa-solid fa-suitcase fa-rotate-180"></i>
        ${singleData.labels[0]}
        </div>
                    <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
                    <i class="fa-solid fa-futbol"></i>
                    ${singleData.labels[1]}
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
    showSpinner();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const object = await res.json();
    const data = object.data;
    const closeData = data.filter(singleCloseData => singleCloseData.status === 'closed');
    document.getElementById('total').innerText = closeData.length;
    showClosedIssues(closeData);
};

const showClosedIssues = (closeData) => {
    document.getElementById('allIssues').innerHTML = '';
    closeData.forEach(singleData => {
        document.getElementById('allIssues').innerHTML += `
        <div id="${singleData.id}" class="card bg-base-100 card-xl shadow-sm bg-base-100 border border-[#ffffffFF] rounded-lg py-6 px-4 mx-6 space-y-3">
        <div class="flex justify-between">
        <img src="./assets/Open-Status.png" alt="" srcset="">
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">${singleData.priority}</div>
        </div>
        <h2 class="font-semibold text-[#1f2937FF]">${singleData.title}</h2>
        <p class="text-[#64748bFF]">${singleData.description}</p>
        <div>
        <div class="badge bg-[#feececFF] text-[#ef4444FF] font-medium text-xs">
        <i class="fa-solid fa-suitcase fa-rotate-180"></i>
        ${singleData.labels[0]}
        </div>
                    <div class="badge bg-[#fef3c7FF] text-[#d97706FF] font-medium text-xs">
                    <i class="fa-solid fa-futbol"></i>
                    ${singleData.labels[1]}
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


const showSpinner = () => {
    document.getElementById('spinner').classList.remove('hidden');
}

const hideSpinner = () => {
    document.getElementById('spinner').classList.add('hidden');
}




   





loadAllIssues()