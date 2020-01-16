import React, { Component } from "react";
import {
	List,
	ImageList,
	Image,
	Feature,
	FeatureText,
	FeatureTitle,
	ImageContainer,
	Emphasize,
	Fact,
	FactList
} from "../components/styles/styles.js";

import Section from "../components/styles/Section";
import Card from "../components/styles/Card";

import { ProjectBar, SubItem } from "../components/styles/ProjectBar";
import PineappleGallery from "../components/PineappleGallery.js";

import ImageButton from "../components/styles/ImageButton.js";

const SECTION_COLOR = "#162238";
const EMPHASIZE_COLOR = "#162238";
const FACT_COLOR = "#f2f2f0";

class Pineapple extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						position: "relative"
					}}>
					<img
						alt="pineapple banner"
						style={{ width: "100%", objectFit: "contain" }}
						src="/images/pineapple/PineappleBanner.png"
					/>
					<div
						style={{
							position: "absolute",
							top: "70%",
							left: "50%",
							transform: "translate(-50%, -50%)"
						}}>
						<ImageButton
							text="Get started"
							color={"#ffffff"}
							textcolor={"#000"}
							link="https://github.com/LeonErath/Pineapple"
						/>
					</div>
				</div>

				<ProjectBar>
					<SubItem>
						<div>Dream Team</div>
						<div>
							Gero Embser (iOS-App), Leon Erath (Android App), Florian Brandt
							(Server)
						</div>
					</SubItem>
					<SubItem>
						<div>AWARDS</div>
						<div>Top 10 of 1600 Projects</div>
					</SubItem>
					<SubItem>
						<div>PROJECT</div>
						<div>1 year.</div>
					</SubItem>
				</ProjectBar>

				<Section>
					<Section.Content>
						<Section.Topic color={SECTION_COLOR}>PROBLEM</Section.Topic>
						<Section.Header>
							We want to use the spirit of the times and use the features of the
							smartphone to help students organize their everyday school life.
						</Section.Header>
						<Section.Text>
							The computer science and especially the use of the smartphone is
							increasing more and more. Nowadays, it is hard to think away. The
							smartphone is now a must for many students, but many schools are
							still reluctant to actively integrate the smartphone into everyday
							school life.
							<br />
							<br />
							Our project is about a school planner, which should{" "}
							<Emphasize color={EMPHASIZE_COLOR}>
								make the school day easier
							</Emphasize>{" "}
							for the pupils. The planner should remember as an app to the
							homework or also to practice time for exams. The goal of the
							project is to develop a fully functional app for Android and iOS
							that can be{" "}
							<Emphasize color={EMPHASIZE_COLOR}>
								actively integrated into the everyday life of the school.
							</Emphasize>
							<br />
						</Section.Text>
					</Section.Content>
					<ImageContainer>
						<img
							style={{
								height: "260px",
								objectFit: "contain"
							}}
							src="/images/pineapple/stress.png"
							alt="Stress"
						/>
					</ImageContainer>
				</Section>

				<FactList color={FACT_COLOR}>
					<Fact>
						More than{" "}
						<Emphasize color={EMPHASIZE_COLOR}>85% of all students</Emphasize>{" "}
						uses a smartphones. <br />
						98% of all smartphones use the android or ios operating system.
						<br />
						Therefore, an{" "}
						<Emphasize color={EMPHASIZE_COLOR}>
							android and iOS app
						</Emphasize>{" "}
						ist the perfect solution!
					</Fact>
				</FactList>

				<Section>
					<Section.Topic color={SECTION_COLOR}>SOLUTION</Section.Topic>
					<Section.Header>
						For each student, his or her own timetable, substitution plan, exam
						plan are put together and suitable articles of the website are
						dynamically displayed to him/her on the basis of his personal
						subjects and courses.
					</Section.Header>
					<Section.Header right>
						<ImageButton text="Android" link="/pineappleios" />
						<ImageButton text="iOS" link="/pineappleandroid" />
					</Section.Header>
				</Section>

				<PineappleGallery />

				<ImageList color="#f2f2f0">
					<Image src="/images/pineapple/grades_pineapple.png" alt="Pineapple" />
					<Image
						src="/images/pineapple/loginscreen_pineapple.png"
						alt="Pineapple"
					/>

					<Image src="/images/pineapple/exams_pineapple.png" alt="Pineapple" />
					<Image
						src="/images/pineapple/class_selection_pineapple.png"
						alt="Pineapple"
					/>

					<Image
						src="/images/pineapple/exam_detail_pineapple.png"
						alt="Pineapple"
					/>
					<Image src="/images/pineapple/course_pineapple.png" alt="Pineapple" />

					<Image src="/images/pineapple/quiz_pineapple.png" alt="Pineapple" />
					<Image
						src="/images/pineapple/homework_pineapple.png"
						alt="Pineapple"
					/>
				</ImageList>

				<Section>
					<Section.Topic color={SECTION_COLOR}>SECURITY</Section.Topic>
					<Section.Header>
						Data protection is the most important factor for a successfull
						school app.
					</Section.Header>
					<Section.Text>
						The data will be treated with the utmost confidence and the personal
						data will be protected against possible attackers. The app is only
						available to students of the Episcopal Marienschule Mönchengladbach
						and represents a project from students to students pose.
					</Section.Text>
				</Section>

				<div
					style={{
						flexWrap: "wrap",
						width: "80%",
						paddingLeft: "10%",
						paddingRight: "10%",
						display: "flex",
						justifyContent: "space-evenly"
					}}>
					<Card>
						<Card.Image url="url(/images/pineapple/encrpytion.png)">
							<Card.Icon src="/images/pineapple/encrpytion_icon.png" />
						</Card.Image>
						<Card.Header>Encryption</Card.Header>
						<Card.Text>
							Every connection to the server is encrypted with SSL / TLS. Each
							school has its own server so that no data can be tapped from other
							schools. In addition, only one app can be used for one student
							only. This ensures security and independence.
						</Card.Text>
					</Card>
					<Card>
						<Card.Image url="url(/images/pineapple/law.png)">
							<Card.Icon src="/images/pineapple/law_icon.png" />
						</Card.Image>
						<Card.Header>Law</Card.Header>
						<Card.Text>
							The app meets the requirements of the law of data economy (§3a
							BDSG). This means only a minimal exchange of data with the server
							takes place. Only the individual data for each student will be
							transferred. Even with theft of a cell phone, no data can be
							collected from other students.
						</Card.Text>
					</Card>

					<Card>
						<Card.Image url="url(/images/pineapple/authentication.png)">
							<Card.Icon src="/images/pineapple/authentication_icon.png" />
						</Card.Image>
						<Card.Header>Authentication</Card.Header>
						<Card.Text>
							Access to the app is only available to authenticated users. These
							different authentication options can be used:
							<br />- Face-to-face authentication
							<br />- Moodle/ILIAS
							<br />- LDAP / Active Directory
						</Card.Text>
					</Card>
				</div>

				<Section>
					<Section.Topic color={SECTION_COLOR}>LONG TERM</Section.Topic>
					<Section.Header>
						To ensure the long-term success of the app, three things have been
						done.
					</Section.Header>
				</Section>

				<List center>
					<Feature center>
						<FeatureTitle>Multigenerational project</FeatureTitle>
						<FeatureText>
							App-AG - Students learn from students to persist over several
							generations
						</FeatureText>
					</Feature>
					<Feature center>
						<FeatureTitle>OpenSource</FeatureTitle>
						<FeatureText>
							sustainable and long-term community development free use for
							everyone
						</FeatureText>
					</Feature>
					<Feature center>
						<FeatureTitle>Easy Integration</FeatureTitle>
						<FeatureText>
							Basis: Untis adaptation to any school possible
						</FeatureText>
					</Feature>
				</List>
			</div>
		);
	}
}

export default Pineapple;
