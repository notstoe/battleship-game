import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	background: var(--bg-blue);
	padding: 0.8rem 3rem;
`;

export const Title = styled.h1`
	display: flex;
	justify-content: center;

	width: 100%;
	max-width: 410px;
`;

export const Image = styled.img`
	${({ title }) =>
		title &&
		css`
			width: 17.8rem;
			height: 6rem;
		`}

	${({ icon }) =>
		icon &&
		css`
			flex: 1;
			align-self: center;

			width: 5rem;
			height: 5.3rem;
		`}
`;

export const ContentWrapper = styled.div`
	flex: 1;
	width: 100%;
	max-width: 1100px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-family: Special Elite, sans-serif;
		font-size: 1.85rem;
		text-align: center;

		color: var(--highlight-yellow);
		margin: 2.8rem 0;
	}

	div {
		flex: 1;
	}
`;
