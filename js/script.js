// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: June 8, 2025
// This file contains the JS functions for index.html

"use strict"

async function getFact() {
  try {
    let factsJSON = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    )
    let jsonRandomFact = await factsJSON.json()
    let randomFact = jsonRandomFact.text

    // output
    document.getElementById("randomFact").innerHTML =
      "<h4> Your random useless fact is:</h4><h4>" + randomFact + "</h4>"
  } catch (error) {
    ; ("<p> Sorry, the information source for these Fun Facts is not working at this moment. Try again later. </p>")
  }
}
