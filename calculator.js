     //Function to calculate Mean
     const getMean = (...calcMean) => {
        let sum = 0;
        for(let arg of calcMean) sum+= arg //sum = sum + arg
        // loop through the array ...calcMean 

        let mean = sum/calcMean.length;
        // let the sum be divided by the array lenght 
        document.getElementById("mean").innerHTML += "Mean:" + mean.toFixed(2)
     }
        
    //function to calculate median
    const getMedian = (...calcMedian) => {
        let sortedNumbers = calcMedian.sort((a, b) => a - b);
        let N = sortedNumbers.length;
        // this will arrange the numbers according to the lowest to the highest 
         // this code is to get the middle number
        let x = (( N + 1)/2)- 1;
        let median;
        if (Number.isInteger(x)){
            // Number.isInterger is to check if the number is an whole Numbers
            median = sortedNumbers[x];
            // to pass the Numbers into Median
        }
        else {
          x = parseInt(x)
             // this works when the number is not an whole Number to find the middle number 
         median = (sortedNumbers[x] + sortedNumbers[x + 1])/2
            // this code allows it to add the two numbers that appears in the middle it adds them together and divide by 2
        }
      document.getElementById("median").innerHTML += "Median:" + median
    }

    //Function to calculate  Mode

    const getMode = (...calcMode) => {
        //first sort the elements in ascending order of magnitude
        let sortedNumbers = calcMode.sort((a,b) => a - b);
        //initialize best and current stretch to one 
        let beststretch = 1;
        let currentstretch = 1;
        // initialize best and current element to the first element 
        let bestElem = sortedNumbers[0];
        let currentElem = sortedNumbers[0];

        for (let i = 1;  i < sortedNumbers.length; i++) {
            if (sortedNumbers[i-1] !== sortedNumbers[i]) {
                //run only when sucessive element are not the same 
                if (currentstretch > beststretch) {
                    beststretch = currentstretch;
                    bestElem = currentElem;

                }

                currentstretch = 0;
                currentElem = sortedNumbers[i];
            }
            // runs only when sucessive elements are the same 
            currentstretch++;

        }
        let mode = currentstretch  >  beststretch ? currentElem : bestElem;
        // let mode = currentstretch > beststretch ? currentElem == sortedNumbers[0] ? 'No mode ' : 'more than one mode ';
        document.getElementById("mode").innerHTML+= "Mode:" + mode
      }

      //start Function 
      const start = () => {
        document.querySelector('button').style.display = "none"
        document.querySelector("#startingMsg").style.display = "none"
        let inputNumbers = [];
        let num;
        num = prompt("Enter a number(Enter 'Q' to quit)") // collect user info
        if((isNaN(num) && num !== 'Q') || num === ""){
            //Reject any entry that is not a number and not 'Q' or simply empty
            alert('Invalid Entry! You either enter a number or Q in uppercase') 
            // triger a warning to the user
        
      } 
      else if(num !== "Q"){
        inputNumbers.push(parseInt(num));
        // let the user inputNumbers be pushed into the string [an empty array] 
        console.log(inputNumbers)
      } 
      
      
      while(num !== "Q"){
        num = prompt("Enter another number (Enter 'Q' to quit)")
        if((isNaN(num) && num !=='Q') || num === ""){
            //Reject any entry that is not a number and not 'Q' or simply empty
            alert('Invalid Entry! You either enter a number or Q in uppercase')
      }
      else if( num !== "Q"){
        inputNumbers
       inputNumbers.push(parseInt(num));
        console.log(inputNumbers)
      }
    }   
    document.getElementById("nos").innerHTML+= "Numbers entered:" + inputNumbers

    getMean(...inputNumbers) //  calls the function of Mean
    getMode(...inputNumbers); // calls the Function of the Mode
    getMedian(...inputNumbers);// calls the Function of Median
   
 }