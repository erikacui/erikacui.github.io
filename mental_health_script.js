/* .js files add interaction to your website */
var factList = [
    "1 in 5 teenagers will face mental illness some point during their life. Family members and friends of yours could have mental health problems. You may not know how to help and support them." ,
    "20.6% of U.S. adults experienced mental illness in 2019 (51.5 million people). This represents 1 in 5 adults." ,
    "5.2% of U.S. adults experienced serious mental illness in 2019 (13.1 million people). This represents 1 in 20 adults." ,
    "16.5% of U.S. youth aged 6-17 experienced a mental health disorder in 2016 (7.7 million people)." ,
    "3.8% of U.S. adults experienced a co-occurring substance use disorder and mental illness in 2019 (9.5 million people)." ,
    "50.6% of U.S. youth aged 6-17 with a mental health disorder received treatment in 2016." ,
    "People with depression have a 40% higher risk of developing cardiovascular and metabolic diseases than the general population. People with serious mental illness are nearly twice as likely to develop these conditions." ,
    "Suicide is the 2nd leading cause of death among people aged 10-34 in the U.S." ,
    "Suicide is the 10th leading cause of death in the U.S." ,
    "Lesbian, gay and bisexual youth are 4x more likely to attempt suicide than straight youth." ,
    "Transgender adults are nearly 12x more likely to attempt suicide than the general population." ,
    "46% of people who die by suicide had a diagnosed mental health condition." ,
  ];
  
  var fact = document.getElementById("fact");
  var myButton = document.getElementById("myButton");
  var count = 0;
  
  myButton.addEventListener("click" , displayFact);
  
  function displayFact () {
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length){
      count = 0;
    }
  }
  