import React from 'react';

import { TEAM_MEMBERS } from './constants';

import * as Styles from './styles';

export const Footer: IComponent = () => {
	return (
		<Styles.Container>
			<Styles.Title>Workshop React - SENAI Suíço-Brasileira</Styles.Title>

			<Styles.MembersListContainer>
				{TEAM_MEMBERS.map(({ name, github }) => (
					<Styles.MemberItem key={github.user}>
						<Styles.MemberName>{name}</Styles.MemberName>{' '}
						<Styles.MemberGithubLink href={github.link} target='_blank'>
							<span>{github.user}</span>
						</Styles.MemberGithubLink>
					</Styles.MemberItem>
				))}
			</Styles.MembersListContainer>
		</Styles.Container>
	);
};
