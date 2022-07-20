
    
    var   emailV, pswV;
    
    // const db = getDatabase();
    
    // Reference
    // Getting data from Textboxes
    
    var EmailBox = document.getElementById("emailBox");
    var PswBox = document.getElementById("pswBox");
    
    // Button References
    
    function sendData(event) {
      event.preventDefault();
      readFormData();
      if (   emailV == "" && pswV == "") {
        alert("Fields can not be blank");
      } 
      else {
        alert("Data Send Successfully");
       
          
        
          
    
        clearFormData();
      }
    }
   
    
     
    
    
   
    // Read Data from Form
    
    function readFormData() {
    
    
      emailV = EmailBox.value;
      pswV = PswBox.value;
      console.log(emailV, pswV);
    }
    
    // Clear Form after data Submission
    
    function clearFormData() {
     
 
      EmailBox.value = "";
      PswBox.value = "";
    }
    
    document.querySelectorAll(".btn")[0].onclick = sendData;