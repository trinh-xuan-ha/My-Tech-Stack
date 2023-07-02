function validateForm() {
    let studentId = document.forms["studentForm"]["studentId"].value;
    console.log("studentId đã nhập là: " + studentId);
    if (studentId === "") {
        showError("studentIdFormItem", "Student ID là bắt buộc");
    } else {
        clearError("studentIdFormItem");
    }

    let firstName = document.forms["studentForm"]["firstName"].value;
    console.log("firstName đã nhập là: " + firstName);
    if (firstName === "") {
        showError("firstNameFormItem", "Tên là bắt buộc");
    } else {
        clearError("firstNameFormItem");
    }
    return false;
}

function showError(formItemId, errorMessage) {
    clearError(formItemId);

    const formItem = document.getElementById(formItemId);
    formItem.classList.add("form__item--error");
    const errorSpan = document.createElement('span');
    errorSpan.className = "form__error-message";
    errorSpan.textContent = errorMessage;
    formItem.appendChild(errorSpan);
}

function clearError(formItemId) {
    const formItem = document.getElementById(formItemId);
    const isError = formItem.classList.contains("form__item--error");
    if (!isError) {
        return;
    }

    formItem.classList.remove("form__item--error");
    const errorSpan = formItem.getElementsByClassName("form__error-message");
    formItem.removeChild(errorSpan[0]);
}