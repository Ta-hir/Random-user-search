document.addEventListener('DOMContentLoaded', () => {

    const result = document.getElementById('result')
    const filter = document.getElementById('filter')

    // where we re going to put the data we fetch
    const listItems = []

    getDat()

    filter.addEventListener('input', (e) => filterDtata(e.target.value))

    async function getDat() {
        const res = await fetch('https://randomuser.me/api?results=50')

        const { results } = await res.json()

        // clear the results
        result.innerHTML = ''

        results.forEach(user => {
            const li = document.createElement('li')


            listItems.push(li)


            li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
            <h4>${user.name.first} ${user.name.last}
            <p>${user.location.city},${user.location.country}</p>
            </div>`

            result.appendChild(li)
        })
    }

    function filterDtata(searchTerm) {
        listItems.forEach(item => {
            if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    }
















    console.log(223334)
})