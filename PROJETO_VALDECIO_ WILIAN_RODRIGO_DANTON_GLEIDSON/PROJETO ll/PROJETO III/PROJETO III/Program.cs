{
            int n = 5;
            string[] nome = new string[5];

            for (int i = 0; i < 5; i++)

            {
                Console.WriteLine("Informe o nome " + (i + 1) + ":");
                nome[i] = Console.ReadLine();
            }
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("Nome " + (i + i) + ":" + nome[i]);
            }
        }
    }
}
   


