import React from "react";

const formValidator = (taskDate, taskName, taskDetails) => {
  let taskNameErrorMessage = "";
  let taskDateErrorMessage = "";
  let taskDetailsErrorMessage = "";
  let isFormValid = true;

  if (taskName.length === 0) {
    taskNameErrorMessage = "Task name is required";
    isFormValid = false;
  } else if (taskName.length < 3) {
    taskNameErrorMessage = "Task name must be at least 3 characters";
    isFormValid = false;
  }

  if (taskDate.length === 0) {
    taskDateErrorMessage = "Task date is required";
    isFormValid = false;
  } else if (new Date(taskDate) < new Date()) {
    taskDateErrorMessage = "Task date must be in the future";
    isFormValid = false;
  }

  if (taskDetails.length === 0) {
    taskDetailsErrorMessage = "Task details are required";
    isFormValid = false;
  } else if (taskDetails.length < 10) {
    taskDetailsErrorMessage = "Task details must be at least 10 characters";
    isFormValid = false;
  }

  return {
    taskName: taskNameErrorMessage,
    taskDate: taskDateErrorMessage,
    taskDetails: taskDetailsErrorMessage,
    isValid: isFormValid,
  };
};

export default formValidator;
