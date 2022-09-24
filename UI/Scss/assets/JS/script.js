const users = [{
    Item: "Skippy Peanut Butter 160z",
    Date: "07 Nov,8:35pm",
    Type: "Discarded",
    EstCost: "$40.27",
    Last: "18Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "amazon"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "08 Nov,8:35pm",
    Type: "Want",
    EstCost: "$76.50",
    Last: "17Aug",
    List: "August",
    Auto: "No",
    BuyNow: "N/A"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "09 Nov,8:35pm",
    Type: "Waiting",
    EstCost: "$47.85",
    Last: "22Aug",
    List: "Wholefood",
    Auto: "No",
    BuyNow: "amazon"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "10 Nov,8:35pm",
    Type: "Discarded",
    EstCost: "$27.43",
    Last: "26Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "N/A"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "11 Nov,8:35pm",
    Type: "Cancleed",
    EstCost: "$35.02",
    Last: "20Aug",
    List: "August",
    Auto: "No",
    BuyNow: "amazon"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "12 Nov,8:35pm",
    Type: "Want",
    EstCost: "$32.85",
    Last: "11Aug",
    List: "August",
    Auto: "No",
    BuyNow: "N/A"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "13 Nov,8:35pm",
    Type: "Want",
    EstCost: "$58.99",
    Last: "23Aug",
    List: "Wholefood",
    Auto: "No",
    BuyNow: "amazon"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "14 Nov,8:35pm",
    Type: "Want",
    EstCost: "$63.44",
    Last: "22Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "amazon"
}, {
    Item: "Skippy Peanut Butter 160z",
    Date: "14 Nov,8:35pm",
    Type: "Want",
    EstCost: "$63.44",
    Last: "22Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "amazon"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "14 Nov,8:35pm",
    Type: "Want",
    EstCost: "$63.44",
    Last: "22Aug",
    List: "Grocery",
    Auto: "No",
    BuyNow: "amazon"
},
{
    Item: "Skippy Peanut Butter 160z",
    Date: "09 Nov,8:35pm",
    Type: "Waiting",
    EstCost: "$47.85",
    Last: "22Aug",
    List: "Wholefood",
    Auto: "No",
    BuyNow: "amazon"
}
]

setTimeout(() => {
    getData(users);
    //Get Data
    function getData(data) {
        const userTableBody = document.querySelector("#user-table-body");
        //console.log(userTableBody);


        data.forEach((user) => {

            const tableRow = document.createElement('tr');
            // console.log(tableRow);


            for (const item in user) {
                const tablecol = document.createElement('td');
                // console.log(tablecol);
                const value = user[item];
                if (item == "Type") {
                    const bgcol = document.createElement("span");
                    bgcol.classList.add("badge");
                    bgcol.textContent = user[item];

                    if (user[item] == "Discarded") {
                        bgcol.classList.add("badge-discarded");
                    }
                    if (user[item] == "Want") {
                        bgcol.classList.add("badge-want");
                    }
                    if (user[item] == "Waiting") {
                        bgcol.classList.add("badge-waiting");
                    }
                    tablecol.appendChild(bgcol);
                }
                else {
                    tablecol.textContent = value
                    // console.log(value);
                }
                tableRow.appendChild(tablecol)
            }
            userTableBody.appendChild(tableRow);
        });
    }
}, 2000);


//Filter Data


function filterUser() {
    const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */
    const searchTerm = document.querySelector('#search-field-input');
    const noRecordDiv = document.querySelector('.no-records');
    const userTable = document.querySelector('#user-table');
    userTableBody.textContent = ' ';
    let filteredData = [];

    if (searchTerm.value !== '') {
        filteredData = users.filter((item) => {
            return item.Type.toLowerCase().includes(searchTerm.value.toLowerCase());
        });
    } else {
        filteredData = users;
    }

    if (!filteredData.length) {
        userTableBody.classList.add('d-none');
        noRecordDiv.classList.remove('d-none');
    } else {
        userTableBody.classList.remove('d-none');
        noRecordDiv.classList.add('d-none');
    }
    getData(filteredData);
    console.log(filteredData);
}