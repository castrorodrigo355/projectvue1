const url = `http://localhost:3000/api/students/`;

export default {
    getStudents, deleteStudent, postStudent, updateStudent
}

async function getStudents() {
    const request = await fetch(`${url}`);
    const data = await request.json();
    return data;
}

async function deleteStudent(id) {
    const request = await fetch(`${url}${id}`, {
        method: "DELETE"
    });
    const data = await request.json();
    return data;
}

async function postStudent(student) {
    const request = await fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
        }
    });
    const data = await request.json();
    return data;
}

async function updateStudent() {
    // const request = await fetch(`${url}${id}`, {
    //     method: "PUT",
    //     body: JSON.stringify(student),
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-type": "application/json",
    //     }
    // });
    // const data = await request.json();
    // return data;
}