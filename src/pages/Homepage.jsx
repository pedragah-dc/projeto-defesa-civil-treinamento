
export const Homepage = () => {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', margin: '36px'}}>
      <img
      width="64px"
      src="src\assets\logos\logo_labdesign.png" alt="Logotipo da Defesa Civil" />
        <img
        width="64px"
        src="src\assets\logos\logo_defesa_civil.png" alt="Logotipo da Defesa Civil" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', margin: '36px'}}>
      <div>Defesa Civil</div>
      <div>Treinamento</div>
    </div>
    </>
  )
}
