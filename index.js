// Write your solution in this file!

const employee = {
    name : 'Steve',
    streetAddress : '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, name, key) {
    return Object.assign({}, employee, {[name]: '11 Broadway'})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
    }


function deleteFromEmployeeByKey(employee, key){
    const newEmp= Object.assign({}, employee)
    delete newEmp[key]
    return newEmp
    }


    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key]
        return employee
    
    }