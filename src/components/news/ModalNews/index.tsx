import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IArticles } from "../../../interfaces/newsInterface";
import close from '../../../assets/close.svg';

import { 
  ModalStyles, 
  ModalBody, 
  ImageNews,
  ImageNewCover,
  CloseButton,
  CloseButtonIcon,
  CardBodyNews,
  NewsTitle,
  NewsSubTitle,
  NewsDateText,
  NewsText,
} from './styles';

interface IModal {
  isOpen: boolean
  showModal: () => void
  article: IArticles
}

export const ModalNews = ({ showModal, isOpen, article }: IModal) => {
  const { urlToImage, title, publishedAt, content, description } = article;
  const publishDate = `${new Date(publishedAt).getDate()} de 
    ${new Date(publishedAt).toLocaleString('pt-BR', {
    month: 'long'
  })}`;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={ModalStyles} onClose={showModal}>
        <ModalBody>
          <ImageNews
            style={{ backgroundImage: `url(${urlToImage})` }}>
            <ImageNewCover>
              <CloseButton onClick={showModal}>
                <CloseButtonIcon src={close}/>
              </CloseButton>
              <NewsTitle>{title}</NewsTitle>
            </ImageNewCover>
          </ImageNews>
          <CardBodyNews>
            <NewsSubTitle>{description}</NewsSubTitle>
            <NewsDateText>{publishDate}</NewsDateText>
            <NewsText>{content}</NewsText>
          </CardBodyNews>
        </ModalBody>
      </Dialog>
    </Transition>
  )
}