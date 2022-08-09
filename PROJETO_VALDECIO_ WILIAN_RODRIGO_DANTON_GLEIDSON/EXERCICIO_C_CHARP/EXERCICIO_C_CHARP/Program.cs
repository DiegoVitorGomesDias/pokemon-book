using System;

namespace EXERCICIO_C_CHARP// Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args)
        {
           
            Console.WriteLine("Digite a quantidade de vendas: ");
            int nv = int.Parse(Console.ReadLine());

            string[] Vendedor = new string[nv];
            double[] ValorVenda = new double[nv];

            for (int i = 0; i <= nv; i++)
            {
                /*Console.WriteLine("Digite a " + (i+1) + "º venda: ");*/
                Console.Write("Informe o vendedor: ");
                string nomevendedor = Console.ReadLine();
                Console.Write("Digite a " + (i + 1) + "º venda: ");
                double valor = double.Parse( Console.ReadLine());

                Vendedor[i] = nomevendedor;
                ValorVenda[i] = valor;
            }

            static int Calculo(int media)
            {
                media = int.Parse(ValorVenda[nv]/nv);
                return media;
            }
        }
    }
}