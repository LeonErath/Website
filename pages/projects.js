import styled from "styled-components";
import Link from "next/link";
import Data from "../components/UTILS/Data";

const Div = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  font-family: "Open Sans";
`;

const Duration = styled.div`
  letter-spacing: 0.9px;
  font-size: 14px;
  font-weight: 100;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #404145;
  width: 400px;
`;

const InfoTitle = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 20px;
`;
const InfoText = styled.div`
  letter-spacing: 0.9px;
  font-size: 14px;
  font-weight: 100;
  width: 400px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const LanguageTag = styled.div`
  background: #30336b;
  font-weight: bold;
  font-size: 12px;
  border-radius: 14px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  color: #ffffff;
  padding: 2px 10px 2px 10px;
  margin-right: 4px;
`;

const Project = styled.div`
  margin: 16px;
`;
const Members = styled.div`
  flex-grow: 1;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Developer = styled.div`
  font-size: 14px;
  margin: 4px;
`;

const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 8px;
  object-fit: contain;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 140px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 140px;
  object-fit: contain;
`;

const Projects = () => {
  const projects = Data.map(project => {
    return (
      <Project>
        <Table>
          <ImageContainer>
            <Logo src={project.icon} />
          </ImageContainer>
          <CustomLink href={project.link}>
            <a>
              <InfoTitle>{project.name}</InfoTitle>
              <InfoText>
                <div dangerouslySetInnerHTML={{ __html: project.sub }} />{" "}
              </InfoText>
              <Duration>
                {project.year} - {project.duration}
              </Duration>
              <Tags>
                {project.programmingLanguage.map(language => {
                  return <LanguageTag>{language.name}</LanguageTag>;
                })}
              </Tags>
            </a>
          </CustomLink>
          <Members>
            {project.member.map(developer => {
              return (
                <Developer>
                  {developer.name}: {developer.task}
                </Developer>
              );
            })}
          </Members>
          <ImageContainer>
            {project.links.map(link => {
              switch (link.name) {
                case "github": {
                  return (
                    <Link href={link.url}>
                      <a>
                        <Image
                          alt="github"
                          src="/static/brand/github_black.svg"
                        />
                      </a>
                    </Link>
                  );
                }
                case "playstore": {
                  return (
                    <Link href={link.url}>
                      <a>
                        <Image
                          alt="playstore"
                          src="/static/brand/googleplay.svg"
                        />
                      </a>
                    </Link>
                  );
                }
                case "appstore": {
                  return (
                    <Link href={link.url}>
                      <a>
                        <Image alt="appstore" src="/static/brand/apple.svg" />
                      </a>
                    </Link>
                  );
                }
                default: {
                  return <div />;
                }
              }
            })}
          </ImageContainer>
        </Table>
        <div
          style={{
            height: "1px",
            background: "#D3D3D3",
            maxWidth: "100%",
            width: "1000px",
            marginTop: "20px"
          }}
        />
      </Project>
    );
  });

  return (
    <Div>
      Projects
      <p />
      {projects}
    </Div>
  );
};

export default Projects;
