const projectTemplates = {
    project1: `
        <div>
            <h2>Application de gestion pour la base de données d'un cinéma.</h2>
            <img src="images/projets/appliCine.png" alt="Projet 1" title="Gestion des films" />
            <section class="splide" id="splide3" aria-label="Basic Structure Example">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide"><img src="images/projets/appliCine.png" alt="Projet 1" title="Gestion des films" />Slide 01</li>
                        <li class="splide__slide"><img src="images/projets/appliCine.png" alt="Projet 1" title="Gestion des films" />Slide 02</li>
                        <li class="splide__slide"><img src="images/projets/appliCine.png" alt="Projet 1" title="Gestion des films" />Slide 03</li>
                    </ul>
                </div>
            </section>
            <script>
                new Splide( '#splide3').mount();
            </script>
            <section
            id="splide2"
            class="splide"
            aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
            <div class="splide__track">
                  <ul class="splide__list">
                      <li class="splide__slide">
                          <img src="thumbnail01.jpg" alt="">
                      </li>
                      <li class="splide__slide">
                          <img src="thumbnail02.jpg" alt="">
                      </li>
                      <li class="splide__slide">
                          <img src="thumbnail03.jpg" alt="">
                      </li>
                  </ul>
            </div>
          </section>
                <script>
                new Splide( '#splide2').mount();
                </script>
            
            <p>Description du projet...</p>
            <img src="images/projets/github.png" onclick="window.open('https://github.com/vgtom4/SIO1-AP-CINE-APPLI', '_blank')" style="height=80px" alt="Projet Appli" title="Lien github"/>
        </div>
    `,
    project2: `
        <div>
            <h2>Site web de consultation des résultats d'après les données de la BDD.</h2>
            <img src="images/projets/siteCine.png" alt="Projet 2" title="Page accueil"/>
            
            <p>Description du projet...</p>
            <img src="images/projets/github.png" onclick="window.open('https://github.com/vgtom4/SIO1-AP-CINE-SITE', '_blank')" style="height=80px" alt="Projet Site" title="Lien github"/>

        </div>
    `,
    video: `
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"> <iframe style="width:90%;height:90%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8cawl1?autoplay=1" width="100%" height="100%" allowfullscreen title="Dailymotion Video Player" allow="autoplay"> </iframe> </div>
    `,




    stageeliot: `
        <div>
            <h2>Stage première année : studio de jeu vidéo</h2>
            <img src="images/eliot/unrealengine.png"/>
           
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="width: 50%; text-align: center;">
                        <img src="images/eliot/blueprint.png" style="width: 100%; height: 100%"/>
                        <p>BluePrint</p>
                    </td>
                    <td style="width: 50%; text-align: center;">
                        <img src="images/eliot/dash.gif" style="width: 100%; height: 100%"/>
                        <p>Sytème de dash</p>
                    </td style="width: 50%; text-align: center;">
                </tr>
                <tr>
                    <td style="width: 50%; text-align: center;">
                        <img src="images/eliot/door.gif" style="width: 100%; height: 100%"/>
                        <p>Animation d'ouverture de porte</p>
                    </td>
                    <td style="width: 50%; text-align: center;">
                        <img src="images/eliot/mecagrab.gif" style="width: 100%; height: 100%"/>
                        <p>Mécanique de grab</p>
                    </td>
                </tr>
            </table>
        </div>
    `,


    projectdemo: `
        <div>
            <h2>Projet demo</h2>
            <img src="https://gyazo.com/a0f6ef75502ff05ad78e7778c5235ee7.gif" alt="Projet 1" title="c'est magnifique" />
            <img src="https://gyazo.com/f34b0ed1f228f5b8106acd7ff5637ce0.gif"/>
            
            <p>Description du projet demo.</p>
        </div>
    `,
    audio: `
        <div>
            <img src="https://gyazo.com/f34b0ed1f228f5b8106acd7ff5637ce0.gif" alt="hmmm" /><br/>
            <audio controls>
                <source src="assets/audio/hmmm.mp3" type="audio/mpeg">
                Votre navigateur ne supporte pas la balise audio.
            </audio>
        </div>
    `,
    game: `
    <input type="text" id="mot" name="mot" oninput="validerMot()">

    <div id="theGames" style="display: none;">
        <b><h1>GAME</h1></b>
        <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/4017918/index.html" width="80%" height="700"></iframe>
        <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/4274784/picohot_html/index.html" width="80%" height="700"></iframe>
        <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/235259/Celeste/index.html?v=1542780913" width="80%" height="700"></iframe>
        <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/1278632/index.html?v=1574336003" width="80%" height="700"></iframe>
        <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/496812/index.html?v=1542781860" width="80%" height="700"></iframe>
        <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/6086484/index.html" width="80%" height="700"></iframe>
    </div>
    
    `,
    gameSnake: `
        <b><h1>GAME</h1></b>

        <!-- <iframe src="https://scratch.mit.edu/projects/760991673/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe> -->
        <br/>👀soon👀<br/>
        <div class="game">
            <div class="grille">
                <div class="game-details">
                    <span class="score">Score: 0</span>
                    <span class="high-score">High Score: 0</span>
                </div>

                <div class="play-board"></div>

                <div class="controls">
                    <i data-key="ArrowLeft" class="gg-arrow-left"></i>
                    <i data-key="ArrowUp" class="gg-arrow-up"></i>
                    <i data-key="ArrowRight" class="gg-arrow-right"></i>
                    <i data-key="ArrowDown" class="gg-arrow-down"></i>
                </div>

            </div>
        </div>
        `,
    // ... autres projets ...
};
