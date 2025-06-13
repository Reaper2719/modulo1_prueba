document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");

  const preguntas = [
    {
      texto: "¿Está la vivienda conectada a la red eléctrica nacional?",
      tipo: "radio",
      name: "conectada_red",
      opciones: [
        "Sí, conexión estable",
        "Sí, pero con cortes frecuentes",
        "No, fue desconectada",
        "No, nunca ha estado conectada"
      ]
    },
    {
      texto: "¿Cómo obtiene actualmente energía eléctrica?",
      tipo: "checkbox",
      name: "fuentes_energia",
      opciones: [
        "Planta o generador a combustible",
        "Paneles solares autónomos",
        "Sistema fotovoltaico comunitario",
        "Baterías recargables",
        "No cuenta con ninguna fuente",
        "Otro"
      ]
    },
    {
      texto: "¿Qué tipo de combustible utiliza?",
      tipo: "checkbox",
      name: "combustible",
      opciones: [
        "Gasolina",
        "Diésel",
        "Gas GLP",
        "Ninguna",
        "Otro"
      ]
    },
    {
      texto: "¿Qué tipo de energía usa para cocinar?",
      tipo: "checkbox",
      name: "energia_cocina",
      opciones: [
        "Energía eléctrica",
        "Gas GLP",
        "Leña",
        "Otro"
      ]
    }
    // Las 16 preguntas restantes se añadirán en la siguiente parte
  ];

  
  // Preguntas adicionales añadidas
  const preguntas_extra = [
  {
    "texto": "¿Cuánto consume al mes de GLP?",
    "tipo": "radio",
    "name": "consumo_glp",
    "opciones": [
      "1 pipa de 10 libras",
      "1 pipa de 20 libras",
      "1 pipa de 40 libras",
      "No usa gas",
      "Otro"
    ]
  },
  {
    "texto": "¿Cuánto le cuesta al mes este gas?",
    "tipo": "radio",
    "name": "costo_gas",
    "opciones": [
      "$20.000 – $50.000",
      "$50.000 – $100.000",
      "Más de $100.000"
    ]
  },
  {
    "texto": "¿Quién administra el sistema de energía en la comunidad?",
    "tipo": "radio",
    "name": "admin_energia",
    "opciones": [
      "Cada familia",
      "Junta comunitaria",
      "Asociación local",
      "Organización externa",
      "No aplica"
    ]
  },
  {
    "texto": "¿Presenta problemas frecuentes con la energía?",
    "tipo": "checkbox",
    "name": "problemas_energia",
    "opciones": [
      "Apagones o cortes",
      "Baja tensión",
      "Dañó electrodomésticos",
      "Sobrecarga",
      "No tiene problemas",
      "Otro"
    ]
  },
  {
    "texto": "¿Cuánto le cuesta mensualmente la energía eléctrica?",
    "tipo": "radio",
    "name": "costo_energia",
    "opciones": [
      "$20.000 – $60.000",
      "$60.000 – $100.000",
      "$100.000 – $150.000",
      "Más de $150.000",
      "No paga",
      "No tiene servicio"
    ]
  },
  {
    "texto": "¿Cuánto le cuesta el combustible usado al mes?",
    "tipo": "radio",
    "name": "costo_combustible",
    "opciones": [
      "$50.000 – $100.000",
      "$100.000 – $150.000",
      "$150.000 – $200.000",
      "Más de $200.000"
    ]
  },
  {
    "texto": "¿Cuál es su disposición frente a un sistema comunitario renovable?",
    "tipo": "radio",
    "name": "disposicion_renovable",
    "opciones": [
      "Muy dispuesto",
      "Dispuesto con condiciones",
      "No interesado",
      "Depende del costo",
      "Otro"
    ]
  },
  {
    "texto": "¿Cuáles de los siguientes residuos orgánicos se generan en mayor proporción?",
    "tipo": "checkbox",
    "name": "residuos_generados",
    "opciones": [
      "Restos de cultivos",
      "Residuos de pescado y mariscos",
      "Excrementos o purines de animales",
      "Residuos de madera",
      "Otro"
    ]
  },
  {
    "texto": "¿Qué uso o disposición le da habitualmente a los residuos orgánicos?",
    "tipo": "checkbox",
    "name": "uso_residuos",
    "opciones": [
      "Se entierran o compostan",
      "Se arrojan a basureros",
      "Se eliminan en ríos o mares",
      "Se usan para alimentar animales",
      "Se acumulan sin uso",
      "Se entregan a recicladores",
      "Otro"
    ]
  },
  {
    "texto": "¿Cuáles son los usos prioritarios de la energía eléctrica en su hogar?",
    "tipo": "checkbox",
    "name": "usos_prioritarios",
    "opciones": [
      "Iluminación",
      "Refrigeración de alimentos",
      "Carga de dispositivos",
      "Televisión y entretenimiento",
      "Ventilación o aire acondicionado",
      "Cocinar o calentar alimentos",
      "Trabajo o actividades productivas",
      "Bombeo de agua",
      "Educación",
      "Otro"
    ]
  },
  {
    "texto": "¿Qué tan importante considera el acceso a la energía eléctrica?",
    "tipo": "radio",
    "name": "importancia_energia",
    "opciones": [
      "Es esencial para mejorar calidad de vida",
      "Es importante, aunque se puede vivir con restricciones",
      "Es útil, pero no es necesidad prioritaria",
      "No lo considero necesario",
      "No sabe / No responde"
    ]
  },
  {
    "texto": "¿Estaría dispuesto a participar en un sistema comunitario de energía renovable?",
    "tipo": "radio",
    "name": "participaria_renovable",
    "opciones": [
      "Muy dispuesto",
      "Dispuesto con condiciones",
      "No interesado",
      "Depende del costo",
      "Otro"
    ]
  },
  {
    "texto": "¿Qué condiciones considera importantes para aceptar una solución comunitaria de energía renovable?",
    "tipo": "text",
    "name": "condiciones_importantes"
  },
  {
    "texto": "¿Qué recursos naturales cree usted que se podrían usar para generar energía en su comunidad?",
    "tipo": "text",
    "name": "recursos_naturales"
  },
  {
    "texto": "¿Qué soluciones han implementado cuando falla la energía?",
    "tipo": "text",
    "name": "soluciones_falla"
  },
  {
    "texto": "¿Qué cambios le gustaría ver en el sistema energético de su comunidad?",
    "tipo": "text",
    "name": "cambios_esperados"
  }
];
  preguntas.push(...preguntas_extra);

preguntas.forEach((pregunta, index) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${pregunta.texto}`;
    fieldset.appendChild(legend);

    pregunta.opciones.forEach(op => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = pregunta.tipo;
      input.name = pregunta.name;
      input.value = op;
      label.appendChild(input);
      label.append(" " + op);
      fieldset.appendChild(label);
    });

    formulario.appendChild(fieldset);
  });
});
