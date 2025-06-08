// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: June 8, 2025
// This file contains the JS functions for index.html

"use strict"

async function getFact() {
  try {
    const factsJSON = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
    )
    const jsonRandomFact = await factsJSON.json()
    const randomFact = jsonRandomFact.text


    // output
    document.getElementById("randomFact").innerHTML =
      "<p> Your random useless fact is: " + randomFact + " .</p>"
  }
  catch (error) {
    "<p> Sorry, the information source for these Fun Facts is not working at this moment. Try again later. </p>"
  }
}