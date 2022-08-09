using System;

namespace valdecio_csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.Write("Digite seu nome: ");

            string x = Console.ReadLine();

            Console.Clear();
            Console.WriteLine("Hello " + x + "! \n");

            Console.ReadLine();
        }
    }
}
