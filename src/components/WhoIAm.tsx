function WhoIAm(){

  function openDrive(){
    window.open('https://drive.google.com/file/d/1ff5J70tZz8KBjs860FZkfcJRNahMNojX/view?usp=sharing', '_blanket')
  }

  function openGit(){
    window.open('https://github.com/daviolivas', '_blanket')
  }

    return <>
      <div className="flex flex-col gap-10 w-72">
        <p className="font-bold text-6xl">Olá!</p>

        <div className=" flex w-full gap-2">
          <button className=" bg-slate-600 rounded-full pl-3 pr-3 pb-1 pt-1 text-white" onClick={openDrive}>
            Currículo
          </button>

          <button className="rounded-full pl-3 pr-3 pb-1 pt-1 border border-black" onClick={openGit}>
            Portifólio
          </button>
        </div>        

        <p className=" text-justify">
          Meu nome é Davi, tenho 21 anos e curso ciência da computação na FMU. Atualmente estou buscando minha
          primeira experiência profissional para ingressar no mercado de trabalho.
        </p>

        <p className=" text-justify">
          "Life is a tide of changes."
        </p>
      </div>
    </>
    
}

export default WhoIAm