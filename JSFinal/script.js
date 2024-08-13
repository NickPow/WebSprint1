// Function to display data on the webpage
function DisplayData(Data) {
    const JsonDataDiv = document.getElementById('JsonData');
    Data.forEach(Record => {
        JsonDataDiv.innerHTML += `<p>Name: ${Record.Name}</p>`;
        console.log(`Name: ${Record.Name}`);
    });
}

// Function to get all names as a comma-separated string
function GetAllNames(Data) {
    return Data.map(Record => Record.Name).join(', ');
}

// Function to calculate the average age
function GetAverageAge(Data) {
    const TotalAge = Data.reduce((Sum, Record) => Sum + Record.Age, 0);
    return (TotalAge / Data.length).toFixed(2);
}

// Function to count the number of employed and unemployed records
function GetEmploymentStatusCount(Data) {
    const EmployedCount = Data.filter(Record => Record.IsEmployed).length;
    const UnemployedCount = Data.length - EmployedCount;
    return `Employed: ${EmployedCount}, Unemployed: ${UnemployedCount}`;
}

// Fetch the JSON file and process the data
fetch('data.json')
    .then(Response => Response.json())
    .then(Data => {
        console.log(Data);
        DisplayData(Data);
        console.log(`Names: ${GetAllNames(Data)}`);
        console.log(`Average Age: ${GetAverageAge(Data)}`);
        console.log(GetEmploymentStatusCount(Data));

        // Display results on the webpage
        document.getElementById('JsonData').innerHTML += `
            <p>All Names: ${GetAllNames(Data)}</p>
            <p>Average Age: ${GetAverageAge(Data)}</p>
            <p>${GetEmploymentStatusCount(Data)}</p>
        `;
    })
    .catch(Error => console.error('Error fetching JSON:', Error));
