import {Box, Group} from "@mantine/core"
import {CommentCard} from "components"
import useEmblaCarousel from "embla-carousel-react"
import * as React from "react"
import {ChevronRight, ChevronLeft} from "tabler-icons-react"

// Carousel
type Item = {
  body: string
  createdAt: string
  author: {
    name: string,
    image: string
  }
}

export type CarouselProps = {
  items: Item[]
}

export function Carousel({items}: CarouselProps): JSX.Element {
   const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return <Box sx={{position: "relative"}}>
    <Group position="right" sx={{position: "absolute", top: 24, right: 24, zIndex: 1}}>
      <IconContainer hint="left" onClick={scrollPrev}>
        <ChevronLeft strokeWidth={1.5} size={24}/>
      </IconContainer>
      <IconContainer hint="right" onClick={scrollNext}>
        <ChevronRight strokeWidth={1.5} size={24}/>
      </IconContainer>
    </Group>
    <Box sx={{overflow: "hidden"}}>
      <Box className="viewport" ref={emblaRef}>
        <Box className="container" sx={{display: "flex"}}>
          {items.map((item, i) => {
            return <Box
              key={i}
              sx={{
                flexShrink: 0,
                flexBasis: "100%",
              }}
            >
              <CommentCard
                postedAt={item.createdAt}
                body={item.body}
                author={item.author}
              />
            </Box>
          })}
        </Box>
      </Box>
    </Box>
  </Box>
}

// IconContainer
type IconContainerProps = {
  children: React.ReactNode
  hint: "left" | "right"
  onClick: () => void
}

function IconContainer({children, hint, onClick} : IconContainerProps) {
  const side = 16 * 2
  return <Box
    onClick={onClick}
    sx={{
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      backgroundColor: "lightcoral",
      height: side,
      width: side,
    }}
  >
    <RepositionSVG hint={hint} offset={2}>
      {children}
    </RepositionSVG>
  </Box>
}

// RepositionSVG
type RepositionSVGProps = {
  children: React.ReactNode
  hint: "left" | "right"
  offset?: number
}

function RepositionSVG({children, hint, offset = 1}: RepositionSVGProps) {
  return <Box sx={{
    position: "relative",
    left: (hint == "left" ? -1 : 1) * offset,
    "& > svg": {
      display: "block"
    }
  }}>
    {children}
  </Box>
}

// ORIGINAL CHEVRONS-IN-CIRCLE VERSION /////////////////////////////////////////////////////////////

// import {
//   Box, Container, Group, Title,
// } from "@mantine/core"
// import {CommentCard} from "components"
// import * as React from "react"
// import {ChevronRight, ChevronLeft} from "tabler-icons-react"
// // import {Global, css} from "@emotion/react"
// ////////////////////////////////////////////////////////////////////////////////////////////////////
// import useEmblaCarousel, {
//   // EmblaCarouselType,
//   // EmblaOptionsType,
//   // EmblaPluginType,
//   // EmblaEventType,
//   // UseEmblaCarouselType,
// } from "embla-carousel-react"
//
// const body = `
//   <p>
//     I use <a href=\"https://heroku.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href=\"https://www.digitalocean.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Digital Ocean</a> VPS to save some cash.
//   </p>
// `
//
// export const EmblaCarousel = () => {
//    const [emblaRef, emblaApi] = useEmblaCarousel()
//
//   const scrollPrev = React.useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])
//
//   const scrollNext = React.useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])
//
//   return <>
//     <Group position="apart">
//       <Title order={2} mb={8}>Recent Testimonials</Title>
//       <Group>
//         <IconContainer hint="left" onClick={scrollPrev}>
//           <ChevronLeft strokeWidth={1.5} size={24}/>
//         </IconContainer>
//         <IconContainer hint="right" onClick={scrollNext}>
//           <ChevronRight strokeWidth={1.5} size={24}/>
//         </IconContainer>
//       </Group>
//     </Group>
//     <Box sx={{overflow: "hidden"}}>
//       <Box className="viewport" ref={emblaRef}>
//         <Box className="container" sx={{display: "flex"}}>
//           <Box sx={{
//             flexShrink: 0,
//             flexBasis: "100%",
//           }}>
//             <CommentCard
//               postedAt="2016-02-01"
//               body={body}
//               author={{
//               name: "Jacob Warnhalter",
//               image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
//             }}/>
//           </Box>
//           <Box sx={{
//             flexShrink: 0,
//             flexBasis: "100%",
//           }}>
//             <CommentCard
//               postedAt="2017-03-11"
//               body={body}
//               author={{
//               name: "Jessica Rabbit",
//               image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
//             }}/>
//           </Box>
//           <Box sx={{
//             flexShrink: 0,
//             flexBasis: "100%",
//           }}>
//             <SliderItem>3</SliderItem>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   </>
// }
//
// export default function HomePage() {
//   return <div>
//     <Container>
//       <EmblaCarousel/>
//     </Container>
//   </div>
// }
//
// function SliderItem({children}: any) {
//   return <Box sx={{backgroundColor: "red", height: "10rem"}}>
//     {children}
//   </Box>
// }
//
// function IconContainer({children, hint, onClick} : any) {
//   const side = 16 * 2
//   return <Box
//     onClick={onClick}
//     sx={{
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "50%",
//       backgroundColor: "lightcoral",
//       height: side,
//       width: side,
//     }}
//   >
//     <RepositionSVG hint={hint}>
//       {children}
//     </RepositionSVG>
//   </Box>
// }
//
// function RepositionSVG({children, hint, offset = 2}: any) {
//   return <Box sx={{
//     position: "relative",
//     left: (hint == "left" ? -1 : 1) * offset,
//     "& > svg": {
//       display: "block"
//     }
//   }}>
//     {children}
//   </Box>
// }
