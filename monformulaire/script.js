$(document).ready(function() {

    var $pseudo = $('#nom'),
        $mdp = $('#sujet'),

        $mail = $('#email'),
        $envoi = $('#envoieform'),
        $message = $('#message'),
        $erreur = $('#erreur'),
        $champ = $('.champ');

    $champ.keyup(function() {
        if ($pseudo.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $pseudo.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $pseudo.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });



    $champ.keyup(function() {
        if ($mdp.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $mdp.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $mdp.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });


    $champ.keyup(function() {
        if ($mail.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $mail.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $mail.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });

    $champ.keyup(function() {
        if ($message.val().length < 2) { // si la chaîne de caractères est inférieure à 5
            $message.css({ // on rend le champ rouge
                backgroundColor: 'red',
                color: 'black'
            });
        } else {
            $message.css({ // si tout est bon, on le rend vert
                backgroundColor: 'white',
                color: 'green'
            });
        }
    });


    $envoi.click(function(e) {
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        // puis on lance la fonction de vérification sur tous les champs :
        verifier($pseudo);
        verifier($mdp);
        verifier($message);
        verifier($mail);
    });



    function verifier(champ) {
        if (champ.val().length < 2) { // si le champ est vide
            $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
    }

});