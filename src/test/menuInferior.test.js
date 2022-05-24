import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { describe } from 'jest-circus';
import Footer from '../components/Footer';

describe('19 - o rodapé deve respeitar os atributos descritos no protótipo', () => {
  it('O menu inferior deve ter possuir o atributo data-testid=footer', () => {
    render(<Footer />);
    const idFooter = screen.getByTestId(/footer/i);
    expect(idFooter).toBeInTheDocument();
  });
  it('O elemento que leva para a página de bebidas deve possuir'
  + 'o atributo data-testid=drinks-bottom-btn', () => {
    render(<Footer />);
    const idBebidas = screen.getByTestId(idBottom);
    expect(idBebidas).toBeInTheDocument();
  });

  it('O elemento que leva para a página de explorar deve possuir'
  + 'o atributo data-testid=explore-bottom-btn', () => {
    render(<Footer />);
    const idExplore = screen.getByTestId(/explore-bottom-btn/i);
    expect(idExplore).toBeInTheDocument();
  });

  it('O elemento que leva para a página de comidas deve possuir'
  + 'o atributo data-testid=food-bottom-btn', () => {
    render(<Footer />);
    const idComidas = screen.getByTestId(/food-bottom-btn/i);
    expect(idComidas).toBeInTheDocument();
  });
});

describe('20 - Posiciona o menu inferior de forma fixa e apresente 3 ícones:'
+ 'um para comidas, um para bebidas e outro para exploração', () => {
  // it('O menu inferior deve ficar fixado sempre ao final da página', () => {
  //   render(<Footer />);

  //   const footerFix = screen.getByTestId('footer');

  //   expect(footerFix).toHaveStyle('position: fixed');
  // });
  it('Apresenta os ícones corretos (drinkIcon.svg, exploreIcon.svg'
  + 'e mealIcon.svg, disponíveis na pasta src/images/)', () => {
    render(<Footer />);

    const drinkIcon = screen.getByTestId(idBottom);
    expect(drinkIcon).toHaveAttribute('src', 'drinkIcon.svg');

    const exploreIcon = screen.getByTestId('explore-bottom-btn');
    expect(exploreIcon).toHaveAttribute('src', 'exploreIcon.svg');

    const foodIcon = screen.getByTestId('food-bottom-btn');
    expect(foodIcon).toHaveAttribute('src', 'mealIcon.svg');
  });
});

// describe('22 - Redireciona a pessoa usuária para uma lista de'
// + 'cocktails ao clicar no ícone de bebidas', () => {
//   it(' Redireciona para a rota correta', () => {
//     const { history } = renderWithRouter(<Foods />);
//     history.push('/foods');
//     const bottomTeste = screen.getByTestId(idBottom);
//     expect(bottomTeste).toBeInTheDocument();
//     userEvent.click(bottomTeste);
//     console.log(value);
// history.push('/drinks');
// const { pathname } = history.location;
// expect(pathname).toBe('/drinks');
// const chulambes = screen.getByRole('heading', { name: /Drinks/i });
// expect(chulambes).toBeInTheDocument();
// });

// describe('23 - Redireciona a pessoa usuária para a tela'
// + 'de explorar ao clicar no ícone de exploração', () => {
//     render(<Footer />);
//     const idFooter = screen.getByTestId(/footer/i);
//     expect(idFooter).toBeInTheDocument();
//   });

// describe('Redirecione a pessoa usuária para uma lista de'
// + 'comidas ao clicar no ícone de comidas', () => {
//   it(' Redireciona para a rota correta', () => {
//     render(<Footer />);
//     const idFooter = screen.getByTestId(/footer/i);
//     expect(idFooter).toBeInTheDocument();
//   });
// });
