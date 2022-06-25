import {ListContainer, Button, ButtonImage} from './sytledComponents'

const ButtonCard = props => {
  const {buttonItems, onPlayGame} = props
  const {id, image} = buttonItems
  const testCaseId = id.toLowerCase()

  console.log(testCaseId)
  const onclickGame = () => {
    onPlayGame(id, image)
  }

  return (
    <ListContainer>
      <Button onClick={onclickGame} type="button">
        <ButtonImage
          src={image}
          alt={id}
          data-testids={`${testCaseId}Button`}
        />
      </Button>
    </ListContainer>
  )
}
export default ButtonCard
