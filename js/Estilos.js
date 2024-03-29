export const pantallaNormal = () => {
  const keyframesCSS = `
  #column-indice {
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #e9e0d2;
    width: 20%;
    height: auto;
    /* gap: 1px;*/
    font-size: 15px;
    font-family: Verdana;
    font-weight: bolder;
    box-shadow: 5px 10px #888888;
    margin-right: 20px;
    overflow: auto;
   /* resize: both;*/
    /* resize: vertical;*/
}

#column-indice a {
    text-decoration: none;
    cursor: pointer;
    text-align: left;
}
.indices {
    display: flex;
    flex-direction:column;
}

.indices li {
    /*Separa los indices*/
    margin-bottom: 5px;
    width:auto;
    list-style: none;
    font-size: smaller;
    text-align: left;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#contenido {
    display: flow-root;
    height: 800px;
    width: 80%;
    margin-left: 21%;
    overflow-y: scroll;
}

.aparacionesCapitulos {
    cursor: pointer;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.chapters {
    transition: all 1s;
    display: block;
    background-color: #e9e0d2;
    height: auto;
    width: auto;
    text-align: justify;
    line-height: 1.5;
    /* font-family: Arial, Helvetica, sans-serif;*/
    cursor: context-menu;
    font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman";
    font-size: medium;
    font-weight: bold;
}

.articles,
p {
    cursor: text;
}

.articles li {
    list-style: none;
    font-size: x-large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

.parr {
    font-family: Garamond, Baskerville, "Baskerville Old Face", "Hoefler Text", "Times New Roman";
    font-size: medium;
    font-weight: bold;
}

#boton-flotante {
    display: none;
}

  
  `;
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(keyframesCSS));
  return document.head.appendChild(style);
};

export const tablet = () => {
  const keyframesCSS = `
    @media screen and (min-width:768px) and (max-width:1023px) {
        .tablet-element {
            /* Estilos específicos para elementos en tablet */
            display: flex !important;
        }

        body {
            font-size: 14px;
            background-color: green;
        }

        #column-indice {
            display: none;
        }
    }
    
    `;
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(keyframesCSS));
  return document.head.appendChild(style);
};

export const movil = () => {
  const keyframesCSS = `
  @media only screen and (max-width: 767px) {
    body {
        font-size: 14px;
       /* background-color: #888888;*/
    }
    /**/
    #column-indice {
        display: none;
        position: fixed;
        font-size: 15px;
        font-family: Verdana;
        font-weight: bolder;
        width: 50%;
        height: auto;
        top: 400px;
        right: 50px;
    }
    .indices li {
        /*Separa los indices*/
        margin-bottom: 5px;
        width:auto;
        list-style: none;
        font-size: 10px;
        text-align: left;
        font-family: Verdana;
        /*border-style: dashed;*/
    }

    #contenido {
        margin-left: auto;
        width: auto;
        height: auto;
    }

    .capitulos-indice {
        font-size:10px ;
    }

    #boton-flotante {
        width: 50px;
        height: 100px;
        position: fixed;
        right: 10px;
        top: 400px;
        display: flex;
        gap: 10px;
       /* background-color: grey;*/
    }

    .botones {
        border-radius: 100%;
        width: 40px;
        height: 40px;
        transform: scale(1.1);
        box-shadow: 0 3px 6px rgba(241, 2, 2, 0.836), 0 3px 6px rgba(238, 222, 3, 0.911), 0 3px 6px rgba(241, 2, 2, 0.836);
    }

    .b:nth-child(1) {
        display: "flex";
        background-color: green;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.50s;
        animation-duration: 0.50s;
    }

    .b:nth-child(2) {
        display: "none";
        background-color: red;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.50s;
        animation-duration: 0.50s;
    }

    .b:hover {
        background-color: aquamarine;
        transition: 0.5s;
    }
} 
  `;
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(keyframesCSS));
  return document.head.appendChild(style);
};
