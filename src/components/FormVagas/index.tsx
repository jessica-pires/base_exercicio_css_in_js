import { FormEvent, ChangeEvent, useState } from 'react'

import { FormBusca, CampoInput, BtnPesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <FormBusca onSubmit={aoEnviarForm}>
      <CampoInput
        placeholder="Front-end, fullstack, node, design"
        onChange={handleChange}
      />
      <BtnPesquisar>Pesquisar</BtnPesquisar>
    </FormBusca>
  )
}
export default FormVagas
