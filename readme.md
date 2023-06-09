# js simmon

- strutturo l' html
- richiamo gli elementi dal DOM
- recuper i valori degli elementi del DOM
- creo una funzione che geniri un array di 5 numeri random da 1 a 99 
- inserisco i numeri generati nell'array all'interno degli elementi dl DOM
- creo un variabile d'appoggio che userò come contatore per il countdown
- **se** il contatore è uguale a 0 
    
    - interrompo il countdown
    - inserisco la classe d-none per far sparire i numeri generati dal DOM
    - rimuvo la classe d-none agli elementi a cui l'ho già inserita 
- **altrimenti** 

    - continuo a decrementarlo

- metto in ascolto il bottone 

    - **se** il valori inseriti dall'utente sono uguali ai numeri random

        - genero un testo di vittoria 

    - **altrimenti**

        - genero un testo di sconfitta
