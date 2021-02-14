/* Name: Kirandeep Kaur
  Student Number: 200447067
  This is the coding behind the completion of ModuleOne - Assignment.
  I have used the concepts of arrays, object literals, functions in literals, if statements, alert and knowledge 
  gained in Module One to complete this assignment.
  This application includes the information about coffee orders.
*/

// First of all, i have created an object literal to display the coffee order details in which i declared its properties and functions
const customerOrder1 = {
  name : ["Kirandeep","Kaur"],
  typeOfDrink: "Latte",
  sizeOfCoffee: "Short",
  drizzleChosen: "Yes",
  whippedCreamChosen: "Yes",
  sweetnerChosen: "No",
  coldFoamChosen: "No",
  dairy: "2% milk",

  // This function incudes the if statements depending on which the values of properties will be changed
  otherIngredients: function(){

    if((this.drizzleChosen) === "Yes")     
    {
      this.drizzleChosen = "Drizzle included";
    }
    if((this.drizzleChosen) === "No")
    {
      this.drizzleChosen = "";
    }
    if((this.sweetnerChosen) === "Yes")
    {
      this.sweetnerChosen = "\nSweetner included";
    }
    if((this.sweetnerChosen) === "No")
    {
      this.sweetnerChosen = "";
    }
    if((this.whippedCreamChosen) === "Yes")
    {
      this.whippedCreamChosen = "\nWhippedCream included";
    }
    if((this.whippedCreamChosen) === "No")
    {
      this.whippedCreamChosen = "";
    }
    if((this.coldFoamChosen) === "Yes")
    {
      this.coldFoamChosen = "\nColdFoam included";
    }
    if((this.coldFoamChosen) === "No")
    {
      this.coldFoamChosen = "";
    }
  },
  
  // This fuction will display the oredr information in an alert box
  displayInformation: function () {

    this.otherIngredients();

      alert(
        "COFFEE ORDER INFORMATION\n"+
        "\nThe name of the Customer is: "+
        this.name[0] + " " + this.name[1] +
        "\n"+
        "Type Of Drink: "+
          this.typeOfDrink +
          "\n"+
          "Size Of Coffee: "+
          this.sizeOfCoffee+
          "\n"+
          "Dairy: "+
          this.dairy+
          "\n"+
          this.drizzleChosen+
          this.sweetnerChosen+
          this.whippedCreamChosen+
          this.coldFoamChosen
        );
   
}
};

// This is second object literal
const customerOrder2 = {
  name : ["Sanamdeep","Singh"],
  typeOfDrink: "Coffee",
  sizeOfCoffee: "Tall",
  drizzleChosen: "No",
  whippedCreamChosen: "Yes",
  sweetnerChosen: "No",
  coldFoamChosen: "Yes",
  dairy: "Cream",

  // This function incudes the if statements depending on which the values of properties will be changed
  otherIngredients: function(){

    if((this.drizzleChosen) === "Yes")     
    {
      this.drizzleChosen = "Drizzle included";
    }
    if((this.drizzleChosen) === "No")
    {
      this.drizzleChosen = "";
    }
    if((this.sweetnerChosen) === "Yes")
    {
      this.sweetnerChosen = "\nSweetner included";
    }
    if((this.sweetnerChosen) === "No")
    {
      this.sweetnerChosen = "";
    }
    if((this.whippedCreamChosen) === "Yes")
    {
      this.whippedCreamChosen = "\nWhippedCream included";
    }
    if((this.whippedCreamChosen) === "No")
    {
      this.whippedCreamChosen = "";
    }
    if((this.coldFoamChosen) === "Yes")
    {
      this.coldFoamChosen = "\nColdFoam included";
    }
    if((this.coldFoamChosen) === "No")
    {
      this.coldFoamChosen = "";
    }
  },
  
  // This fuction will display the oredr information in an alert box
  displayInformation: function () {

    this.otherIngredients();

      alert(
        "COFFEE ORDER INFORMATION\n"+
        "\nThe name of the Customer is: "+
        this.name[0] + " " + this.name[1] +
        "\n"+
        "Type Of Drink: "+
          this.typeOfDrink +
          "\n"+
          "Size Of Coffee: "+
          this.sizeOfCoffee+
          "\n"+
          "Dairy: "+
          this.dairy+
          "\n"+
          this.drizzleChosen+
          this.sweetnerChosen+
          this.whippedCreamChosen+
          this.coldFoamChosen
        );
   
}
};
