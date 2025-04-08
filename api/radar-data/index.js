module.exports = async function (context, req) {
  context.res = {
      headers: {
          'Content-Type': 'application/json'
      },
      body: [
          {
              "name": "Generación Mejorada por Recuperación (RAG)",
              "ring": "adopt",
              "quadrant": "techniques",
              "isNew": "TRUE",
              "description": "Optimización de modelos de IA con bases de datos internas para mejorar resultados"
          },
          {
              "name": "Fine-tuning de embeddings",
              "ring": "trial",
              "quadrant": "techniques",
              "isNew": "FALSE",
              "description": "Ajuste de modelos para análisis de riesgos y personalización de recomendaciones"
          },
          {
              "name": "Modelos de Lenguaje Pequeños (SLMs)",
              "ring": "assess",
              "quadrant": "techniques",
              "isNew": "TRUE",
              "description": "Alternativa eficiente a los LLMs para despliegues locales o edge computing"
          },
          {
              "name": "Inferencia con LLMs en dispositivos de usuario final",
              "ring": "trial",
              "quadrant": "techniques",
              "isNew": "FALSE",
              "description": "Uso de IA generativa en dispositivos móviles de forma local, mejorando privacidad y latencia"
          },
          {
              "name": "Datos sintéticos para entrenamiento",
              "ring": "adopt",
              "quadrant": "techniques",
              "isNew": "TRUE",
              "description": "Generación de datos ficticios para entrenamiento de modelos sin comprometer datos reales"
          },
          {
              "name": "Agentes autónomos (AutoGPT, BabyAGI...)",
              "ring": "trial",
              "quadrant": "tools",
              "isNew": "TRUE",
              "description": "IA que ejecuta tareas de forma autónoma basándose en objetivos definidos por el usuario"
          },
          {
              "name": "Copilot para IDEs",
              "ring": "adopt",
              "quadrant": "tools",
              "isNew": "FALSE",
              "description": "Asistentes de código como GitHub Copilot integrados en editores para sugerencias en tiempo real"
          },
          {
              "name": "Prompt Engineering",
              "ring": "adopt",
              "quadrant": "techniques",
              "isNew": "FALSE",
              "description": "Técnicas de diseño de instrucciones para guiar el comportamiento de modelos generativos"
          },
          {
              "name": "LangChain / Semantic Kernel",
              "ring": "trial",
              "quadrant": "tools",
              "isNew": "TRUE",
              "description": "Frameworks para construir flujos complejos de IA y orquestación de llamadas a LLMs"
          },
          {
              "name": "Azure OpenAI Service",
              "ring": "adopt",
              "quadrant": "platforms",
              "isNew": "TRUE",
              "description": "Acceso controlado a modelos de OpenAI con garantías de cumplimiento y privacidad"
          }
      ]
  };
}
