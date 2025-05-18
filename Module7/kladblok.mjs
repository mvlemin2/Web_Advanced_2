// const calculateTotal = (items) => {
//     let total = 0;
      
//     for (const item of items) {
//       debugger; // De uitvoering pauzeert hier
//       total += item.price * item.quantity;
//     }
  
//     return total;
//   }
  

    // Standaard loggen
    console.log("Normale informatie");

    // Waarschuwingen (geel)
    console.warn("Mmm, dit verdient aandacht...");

    // Fouten (rood)
    console.error("Er is iets helemaal misgegaan!");

    // Informatie (blauw)
    console.info("Wist je dat...?");

    console.group("User Authentication");
    console.log("Checking credentials...");
    console.log("Verifying permissions...");
    console.log("Setting session...");
    console.groupEnd();

    // Je kunt groepen ook nesten:
    console.group("API Requests");
    console.log("Fetching user data...");
      console.group("Profile Details");
      console.log("Loading images...");
      console.log("Processing friends list...");
      console.groupEnd();
    console.groupEnd();

    const validateUser = (user) => {
        console.assert(user.name, "Gebruiker moet een naam hebben!");
        console.assert(user.age >= 18, "Gebruiker moet minimaal 18 jaar zijn!");
      }
  
      validateUser({ name: "Sam", age: 16 });
      // Toont alleen: Assertion failed: Gebruiker moet minimaal 18 jaar zijn!