Resolução: Controle de Acesso de Alunos
Este algoritmo foi desenvolvido como parte da disciplina de Pensamento Computacional, visando automatizar e organizar o processo de entrada de estudantes em sala de aula através de lógica sistemática.

1. Algoritmo em Pseudocódigo
Plaintext
Algoritmo Controle_de_Acesso_Sala
Variáveis:
    aluno_atual: Texto
    lista_oficial: Lista de Textos (Nomes dos alunos matriculados)
    fila_entrada: Lista de Textos (Alunos aguardando na porta)
    total_alunos_fila: Inteiro
    contador: Inteiro

Início
    // Define a quantidade de pessoas na fila
    total_alunos_fila <- contar_elementos(fila_entrada)
    
    // Laço de Repetição: Percorre todos os alunos da fila
    Para contador de 1 até total_alunos_fila Faça
        
        aluno_atual <- fila_entrada[contador]
        Escrever("Verificando aluno: ", aluno_atual)
        
        // Estrutura Condicional: Verificação na lista oficial
        Se (aluno_atual está contido em lista_oficial) Então
            Escrever("Acesso PERMITIDO. Bem-vindo(a), ", aluno_atual, "!")
        Senão
            Escrever("ERRO: Acesso NEGADO. O nome ", aluno_atual, " não consta na lista oficial.")
        FimSe
        
    FimPara

    Escrever("Processo de verificação concluído para todos os alunos da fila.")
Fim
2. Explicação da Estrutura Lógica
Laço de Repetição (Para): Utilizado para garantir que nenhum aluno na fila seja esquecido. O algoritmo só encerra quando o contador atinge o número total de pessoas presentes na entrada.

Estrutura de Decisão (Se-Então-Senão): * O Se valida a identidade contra a base de dados (lista oficial).

O Então executa a ação de entrada.

O Senão isola os casos de erro, emitindo o alerta necessário para o controle de acesso.

3. Identificação do Aluno
Disciplina: Pensamento Computacional

Atividade: Lógica e Algoritmos (A2)

Instituição: UDF - Centro Universitário do Distrito Federal
