import {
  Card,
  ProjectTitle,
  ProjectDesc,
  ProjectUrl,
  Project,
  BtnWrap,
  Content,
} from "./ProjecItemElements";


function ProjectItem(props) {
  return (
    <Project>
      <Card>
        <Content>
          <ProjectTitle>{props.title}</ProjectTitle>
          <ProjectDesc>{props.description}</ProjectDesc>
          <BtnWrap>
            <ProjectUrl href={props.link} target="_blank">
              Github Link
            </ProjectUrl>
          </BtnWrap>
        </Content>
      </Card>
    </Project>
  );
}



export default ProjectItem;
