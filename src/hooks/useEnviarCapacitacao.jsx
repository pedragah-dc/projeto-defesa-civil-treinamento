import { useState, useCallback } from 'react';

export const useEnviarCapacitacao = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const enviarDados = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // 1. Busca os dados no localStorage
      const startFormRaw = localStorage.getItem('startForm');
      const quizStateRaw = localStorage.getItem('quizState'); // Conforme a estrutura do QuizPage.jsx

      if (!startFormRaw || !quizStateRaw) {
        throw new Error('Dados de formulário ou quiz ausentes no localStorage.');
      }

      const startForm = JSON.parse(startFormRaw);
      const quizState = JSON.parse(quizStateRaw);

      // 2. Monta o payload no formato esperado pelo DTO do Java
      const payload = {
        startForm: startForm,
        history: quizState.history || []
      };

      // 3. Envia para o Backend
      const URL_FINAL = import.meta.env.VITE_URL_SERVER_BACKEND + '/api/capacitacao';
      const response = await fetch(URL_FINAL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Falha ao salvar capacitação: ${response.status}`);
      }

      const data = await response.json();
      setIsSuccess(true);
      
      // Opcional: Limpar os dados após o envio com sucesso
      // localStorage.removeItem('startForm');
      // localStorage.removeItem('quizState');

      return data;
    } catch (err) {
      setError(err.message);
      console.error("Erro no envio:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { enviarDados, isLoading, error, isSuccess };
};