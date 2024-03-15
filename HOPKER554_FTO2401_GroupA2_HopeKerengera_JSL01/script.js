function validateSyntax() {
    let input = document.getElementById('petInput').value;

    let result = ""; // Placeholder for validation result


    // Check if input starts with 'pet_' and followed by alphanumeric characters

    if(input.startsWith("pet_")){ //check if entered string starts with "pet_"
        if(
            /\d/.test(input.split("_")[1]) //check if part after "_" has numbers
            && /[a-z]/i.test(input.split("_")[1]) && //check if part after "_" has letters
            !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input.split("_")[1]) //check if part after "_" doesn't have special characters
        ){
            result = "Valid Syntax";  //if it meets above conditions, it is valid   
        }
        else{
            result = "Invalid Syntax"; //if it doesn't then invalid
        }
    }
    else{
        result = "Invalid Syntax"; //if string doesn't start with "pet_", immediately invalid
    }
    document.getElementById('result').innerText = result;
}


