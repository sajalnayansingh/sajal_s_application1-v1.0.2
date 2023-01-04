import React from "react";

import {
  Column,
  Stack,
  Row,
  Text,
  Img,
  Line,
  SelectBox,
  Button,
  RatingBar,
  List,
  Input,
} from "components";

const DesignerPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-urbanist items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1440px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <Stack className="h-[90px] relative w-[100%]">
                <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pt-[3px] md:pt-[4px] pt-[6px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[123px] ml-[179px] sm:mx-[0] pt-[3px] sm:px-[0] w-[10%] sm:w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                              <Text
                                className="flex-grow font-normal mt-[1px] not-italic text-gray_900"
                                as="h4"
                                variant="h4"
                              >
                                English
                              </Text>
                              <Img
                                src="images/img_arrowdown.svg"
                                className="flex-shrink-0 max-w-[100%] w-[17%]"
                                alt="arrowdown"
                              />
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[14px] ml-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                              <Text
                                className="flex-grow font-normal mt-[1px] not-italic text-gray_900"
                                as="h4"
                                variant="h4"
                              >
                                USD
                              </Text>
                              <Img
                                src="images/img_arrowdown.svg"
                                className="flex-shrink-0 max-w-[100%] w-[23%]"
                                alt="arrowdown One"
                              />
                            </Row>
                          </Row>
                          <Line className="bg-gray_300 h-[0.75px] sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]" />
                        </Column>
                      </Column>
                    </Column>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-dmsans items-center md:p-[10px] p-[15px] sm:p-[7px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mb-[3px] md:ml-[112px] ml-[164px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[46%] common-row-list">
                          <ul className="flex flex-row items-start justify-between">
                            <li className="w-[auto] mt-[1px] sm:w-[100%] sm:my-[10px]">
                              <a
                                href={"javascript:"}
                                className="capitalize cursor-pointer hover:font-medium font-normal not-italic text-[16px] hover:text-deep_orange_400 text-gray_900"
                                rel="noreferrer"
                              >
                                Home
                              </a>
                            </li>
                            <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                              <a
                                href={"javascript:"}
                                className="bg-clip-text bg-gradient  capitalize cursor-pointer hover:font-medium font-medium text-[16px] text-transparent"
                                rel="noreferrer"
                              >
                                School Uniforms
                              </a>
                            </li>
                            <li className="w-[auto] mt-[1px] sm:w-[100%] sm:my-[10px]">
                              <a
                                href={"javascript:"}
                                className="capitalize cursor-pointer hover:font-medium font-normal not-italic text-[16px] hover:text-deep_orange_400 text-gray_900"
                                rel="noreferrer"
                              >
                                Corporate
                              </a>
                            </li>
                            <li className="w-[auto] mt-[1px] sm:w-[100%] sm:my-[10px]">
                              <a
                                href={"javascript:"}
                                className="capitalize cursor-pointer hover:font-medium font-normal not-italic text-[16px] hover:text-deep_orange_400 text-gray_900"
                                rel="noreferrer"
                              >
                                Sports
                              </a>
                            </li>
                            <li className="w-[auto] mt-[1px] mr-[6px] sm:mr-[3px] sm:w-[100%] sm:my-[10px] md:mr-[4px]">
                              <a
                                href={"javascript:"}
                                className="capitalize cursor-pointer hover:font-medium font-normal not-italic text-[16px] hover:text-deep_orange_400 text-gray_900"
                                rel="noreferrer"
                              >
                                Blogs
                              </a>
                            </li>
                          </ul>
                        </Row>
                        <Stack className="font-worksans h-[26px] relative w-[13%]">
                          <Img
                            src="images/img_frame100000094.svg"
                            className="absolute bottom-[0] h-[18px] max-w-[100%] w-[100%]"
                            alt="Frame100000094"
                          />
                          <Text
                            className="absolute bg-red_400 flex font-medium items-center px-[3px] right-[27%] rounded-radius50 text-white_A700 top-[0] md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 uppercase w-[12px]"
                            as="h5"
                            variant="h5"
                          >
                            1
                          </Text>
                        </Stack>
                      </Row>
                    </Row>
                  </Column>
                </Column>
                <Img
                  src="images/img_logo.png"
                  className="absolute h-[77px] inset-y-[0] left-[4%] max-w-[100%] my-[auto] w-[5%]"
                  alt="Logo"
                />
              </Stack>
              <Column className="bg-gray_900 flex flex-col font-dmsans justify-end p-[4px] w-[100%]">
                <Column className="flex flex-col items-center justify-start md:ml-[315px] ml-[458px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                    <Text
                      className="capitalize font-medium text-white_A700 tracking-ls028 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Free Delivery on orders above Rs. 1000, DON’T MISS
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient  font-medium sm:ml-[14px] md:ml-[19px] ml-[28px] mt-[1px] text-transparent uppercase w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Shop NOW
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="sm:h-[5px] md:h-[7px] h-[9px] max-w-[100%] ml-[2px] mt-[2px] sm:w-[4px] md:w-[6px] w-[9px]"
                      alt="arrowright"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
          </header>
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Column className="bg-gray_100 flex flex-col items-center justify-start sm:p-[15px] md:p-[32px] p-[47px] w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[166px] mb-[1px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                  Corporate
                </Text>
                <Text
                  className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_500 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  <span className="text-gray_500 text-[14px] font-urbanist">
                    Homepage /{" "}
                  </span>
                  <span className="text-gray_900 text-[14px] font-urbanist">
                    Shop
                  </span>
                </Text>
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-dmsans items-start max-w-[1301px] ml-[auto] mr-[auto] sm:mt-[43px] md:mt-[55px] mt-[81px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[0] sm:w-[100%] w-[22%]">
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <SelectBox
                    className="capitalize font-bold sm:mx-[0] text-[20px] text-gray_900 sm:w-[100%] w-[99%]"
                    placeholderClassName="text-gray_900"
                    name="GroupNine"
                    placeholder="Products Type"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[15px] mr-[0] sm:w-[7px] md:w-[10px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Column className="flex flex-col items-center justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Stack className="h-[321px] relative sm:w-[100%] w-[61%]">
                        <Text
                          className="absolute font-normal leading-[36.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 w-[100%]"
                          as="h3"
                          variant="h3"
                        >
                          <span className="text-gray_700 text-[16px] font-dmsans">
                            Bags
                            <br />
                            Booking
                            <br />
                          </span>
                          <span className="text-deep_orange_400 text-[16px] font-dmsans font-bold">
                            Clothing
                            <br />
                          </span>
                          <span className="text-gray_700 text-[16px] font-dmsans">
                            Men
                            <br />
                            Music
                            <br />
                            Posters
                            <br />
                            Shoes
                            <br />
                            Uncategorized
                            <br />
                            Women
                          </span>
                        </Text>
                        <Line className="absolute bg-gradient  h-[1px] left-[1%] top-[31%] w-[38%]" />
                      </Stack>
                      <Text
                        className="font-normal leading-[36.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-gray_500 text-right sm:w-[100%] w-[17%]"
                        as="h3"
                        variant="h3"
                      >
                        <span className="text-gray_500 text-[16px] font-dmsans">
                          (112)
                          <br />
                          (32)
                          <br />
                        </span>
                        <span className="text-deep_orange_400 text-[16px] font-dmsans font-bold">
                          (42)
                          <br />
                        </span>
                        <span className="text-gray_500 text-[16px] font-dmsans">
                          (13)
                          <br />
                          (54)
                          <br />
                          (93)
                          <br />
                          (52)
                          <br />
                          (14)
                          <br />
                          (65)
                          <br />
                        </span>
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <SelectBox
                    className="capitalize font-bold text-[20px] text-gray_900 w-[100%]"
                    placeholderClassName="text-gray_900"
                    name="GroupTwelve"
                    placeholder="Size"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[15px] mr-[0] sm:w-[7px] md:w-[10px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Button className="cursor-pointer font-bold min-w-[13%] text-[14px] text-center text-gray_900 uppercase w-[max-content]">
                        XS
                      </Button>
                      <Button className="cursor-pointer font-bold min-w-[13%] text-[14px] text-center text-gray_900 uppercase w-[max-content]">
                        S
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[13%] text-[14px] text-center text-white_A700 uppercase w-[max-content]"
                        variant="FillGray900"
                      >
                        M
                      </Button>
                      <Button className="cursor-pointer font-bold min-w-[13%] text-[14px] text-center text-gray_900 uppercase w-[max-content]">
                        L
                      </Button>
                      <Button className="cursor-pointer font-bold min-w-[13%] text-[14px] text-center text-gray_900 uppercase w-[max-content]">
                        XL
                      </Button>
                      <Text
                        className="bg-white_A700 border border-gray_300 border-solid font-bold px-[3px] sm:py-[4px] md:py-[6px] py-[9px] rounded-radius2 text-gray_900 uppercase w-[33px]"
                        as="h4"
                        variant="h4"
                      >
                        XXL
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]">
                  <SelectBox
                    className="capitalize font-bold sm:mx-[0] text-[20px] text-gray_900 sm:w-[100%] w-[99%]"
                    placeholderClassName="text-gray_900"
                    name="GroupFifteen"
                    placeholder="Price Range"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[15px] mr-[0] sm:w-[7px] md:w-[10px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></SelectBox>
                  <Column className="flex flex-col items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Img
                        src="images/img_progress.svg"
                        className="max-w-[100%] w-[100%]"
                        alt="Progress"
                      />
                      <Text
                        className="font-normal font-urbanist mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        <span className="text-gray_700 text-[14px] font-dmsans">
                          Price:
                        </span>
                        <span className="text-gray_900 text-[14px] font-dmsans">
                          {" "}
                          $800— $1,850
                        </span>
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-bold font-dmsans min-w-[27%] md:mt-[11px] mt-[17px] sm:mt-[9px] text-[16px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder5"
                        variant="FillGray900"
                      >
                        Apply
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <SelectBox
                    className="capitalize font-bold text-[20px] text-gray_900 w-[100%]"
                    placeholderClassName="text-gray_900"
                    name="GroupEighteen"
                    placeholder="Colors"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[15px] mr-[0] sm:w-[7px] md:w-[10px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Stack className="h-[54px] sm:mt-[11px] md:mt-[15px] mt-[22px] relative sm:w-[100%] w-[94%]">
                    <Img
                      src="images/img_color.svg"
                      className="absolute h-[54px] max-w-[100%] w-[100%]"
                      alt="Color"
                    />
                  </Stack>
                </Column>
                <Column className="flex flex-col font-urbanist items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <SelectBox
                      className="capitalize font-semibold text-[20px] text-gray_900 w-[100%]"
                      placeholderClassName="text-gray_900"
                      name="GroupTwentyOne"
                      placeholder="Brands"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[15px] mr-[0] sm:w-[7px] md:w-[10px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbFillGray900"
                        >
                          <Img
                            src="images/img_checkmark.svg"
                            className="flex items-center justify-center"
                            alt="checkmark"
                          />
                        </Button>
                        <Img
                          src="images/img_background.svg"
                          className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-radius4 md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="Background One"
                        />
                        <Img
                          src="images/img_background.svg"
                          className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-radius4 md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="Background Two"
                        />
                        <Img
                          src="images/img_background.svg"
                          className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-radius4 md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="Background Three"
                        />
                        <Img
                          src="images/img_background.svg"
                          className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-radius4 md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="Background Four"
                        />
                        <Img
                          src="images/img_background.svg"
                          className="sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] mt-[14px] sm:mt-[7px] md:mt-[9px] rounded-radius4 md:w-[12px] w-[18px] sm:w-[9px]"
                          alt="Background Five"
                        />
                      </Column>
                      <Stack className="h-[195px] ml-[11px] sm:ml-[5px] md:ml-[7px] relative sm:w-[100%] w-[76%]">
                        <Text
                          className="absolute font-normal leading-[33.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_700 w-[100%]"
                          as="h3"
                          variant="h3"
                        >
                          <span className="text-gray_900 text-[16px] font-urbanist font-semibold">
                            Nike
                            <br />
                          </span>
                          <span className="text-gray_900 text-[16px] font-urbanist">
                            Louis Vuitton
                            <br />
                          </span>
                          <span className="text-gray_700 text-[16px] font-urbanist">
                            Hermes
                            <br />
                            Gucci
                            <br />
                            Zalando
                            <br />
                            Adidas
                          </span>
                        </Text>
                        <Line className="absolute bg-gray_900 h-[0.91px] inset-x-[0] mx-[auto] top-[29%] sm:w-[100%] w-[94%]" />
                      </Stack>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col font-worksans items-center justify-start md:ml-[38px] ml-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[22%]">
                    <Img
                      src="images/img_background.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] mb-[1px] rounded-radius4 md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="Background Six"
                    />
                    <Text
                      className="flex-grow font-normal ml-[11px] sm:ml-[5px] md:ml-[7px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_900 tracking-ls056 md:tracking-ls11 sm:tracking-ls11"
                      as="h4"
                      variant="h4"
                    >
                      Show only products on sale
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                    <Text
                      className="font-normal not-italic text-gray_900 tracking-ls056 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Sort by
                    </Text>
                    <SelectBox
                      className="font-normal sm:mx-[0] not-italic text-[14px] text-gray_900 tracking-ls056 md:tracking-ls11 sm:tracking-ls11 sm:w-[100%] w-[74%]"
                      placeholderClassName="text-gray_900"
                      name="GroupThree"
                      placeholder="Best Selling"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[14px] h-[14px] mr-[11px] sm:mr-[5px] sm:h-[8px] sm:w-[7px] md:mr-[7px] md:h-[10px] md:w-[9px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder5"
                      size="md"
                      variant="OutlineGray300"
                    ></SelectBox>
                  </Row>
                </Row>
                <Column className="flex flex-col font-urbanist items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                  <Stack className="h-[402px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[0] font-semibold left-[2%] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      NEW
                    </Text>
                    <Column className="absolute bottom-[0] flex flex-col font-dmsans items-center justify-start pb-[4px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                          <Column className="flex flex-col justify-start pb-[3px] w-[100%]">
                            <Column className="bg-gray_100 flex flex-col items-center justify-start px-[1px] w-[100%]">
                              <Column
                                className="bg-cover bg-no-repeat flex flex-col justify-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group73.png')",
                                }}
                              >
                                <Text
                                  className="bg-gradient1  font-medium mt-[3px] sm:px-[3px] md:px-[4px] px-[7px] py-[1px] rounded-radius2 text-white_A700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  NEW
                                </Text>
                                <Text
                                  className="bg-gradient  font-medium sm:mb-[116px] md:mb-[150px] mb-[219px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:px-[2px] md:px-[3px] px-[5px] py-[1px] rounded-radius2 text-white_A700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  -25%
                                </Text>
                              </Column>
                            </Column>
                            <Column className="flex flex-col justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                              <Text
                                className="capitalize font-dmsans font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                                as="h3"
                                variant="h3"
                              >
                                Combo Tennis Shorts & Tee
                              </Text>
                              <Text
                                className="font-normal font-worksans mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-red_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                ₹680
                              </Text>
                            </Column>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start ml-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                            <RatingBar
                              className="mb-[1px] sm:w-[100%]"
                              value={1}
                              starCount={5}
                              size={13}
                            ></RatingBar>
                            <Text
                              className="font-light ml-[4px] mt-[1px] text-gray_700 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              (1,234 reviews)
                            </Text>
                          </Row>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                              <Stack className="bg-gray_100 h-[283px] pr-[1px] relative w-[100%]">
                                <Img
                                  src="images/img_background_283X219.png"
                                  className="absolute h-[283px] max-w-[100%] w-[100%]"
                                  alt="Background Seven"
                                />
                              </Stack>
                              <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[72%]">
                                <Text
                                  className="capitalize font-medium text-gray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Universal Sports Cap
                                </Text>
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                                  <Text
                                    className="font-normal mb-[1px] not-italic text-red_600 w-[auto]"
                                    as="h3"
                                    variant="h3"
                                  >
                                    ₹680
                                  </Text>
                                  <Text
                                    className="font-normal line-through ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[1px] not-italic text-gray_500 w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    ₹980
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <List
                              className="sm:gap-[14px] md:gap-[18px] gap-[27.45px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[66%]"
                              orientation="horizontal"
                            >
                              <Column className="flex flex-col justify-start pb-[3px] sm:px-[0] w-[100%]">
                                <Stack className="bg-gray_100 h-[283px] pl-[1px] relative w-[100%]">
                                  <Img
                                    src="images/img_background_1.png"
                                    className="absolute h-[283px] max-w-[100%] w-[100%]"
                                    alt="Background Eight"
                                  />
                                </Stack>
                                <Column className="flex flex-col justify-start ml-[1px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                                  <Text
                                    className="capitalize font-dmsans font-medium text-gray_900 w-[auto]"
                                    as="h3"
                                    variant="h3"
                                  >
                                    Training Max Shoes
                                  </Text>
                                  <Text
                                    className="font-normal font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-red_600 w-[auto]"
                                    as="h3"
                                    variant="h3"
                                  >
                                    ₹680
                                  </Text>
                                </Column>
                              </Column>
                              <Column className="flex flex-col justify-start pb-[2px] sm:px-[0] w-[100%]">
                                <Stack className="bg-gray_100 h-[283px] relative w-[100%]">
                                  <Img
                                    src="images/img_background_2.png"
                                    className="absolute h-[283px] max-w-[100%] w-[100%]"
                                    alt="Background Nine"
                                  />
                                </Stack>
                                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                                  <Text
                                    className="capitalize font-dmsans font-medium text-gray_900 w-[auto]"
                                    as="h3"
                                    variant="h3"
                                  >
                                    Women Long Blazer
                                  </Text>
                                  <Text
                                    className="font-normal font-worksans sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-red_600 w-[auto]"
                                    as="h3"
                                    variant="h3"
                                  >
                                    ₹790
                                  </Text>
                                </Column>
                              </Column>
                            </List>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                                <RatingBar
                                  className="mb-[1px] sm:w-[100%]"
                                  value={1}
                                  starCount={5}
                                  size={13}
                                ></RatingBar>
                                <Text
                                  className="font-light mt-[1px] text-gray_700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  (1,234 reviews)
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                                <RatingBar
                                  className="mb-[1px] sm:w-[100%]"
                                  value={1}
                                  starCount={5}
                                  size={13}
                                ></RatingBar>
                                <Text
                                  className="font-light mt-[1px] text-gray_700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  (1,234 reviews)
                                </Text>
                              </Row>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:ml-[67px] ml-[98px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                              <RatingBar
                                className="mb-[1px] sm:w-[100%]"
                                value={1}
                                starCount={5}
                                size={13}
                              ></RatingBar>
                              <Text
                                className="font-light mt-[1px] text-gray_700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                (1,234 reviews)
                              </Text>
                            </Row>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                  </Stack>
                  <Column className="flex flex-col font-dmsans items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[42px] pb-[4px] w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                          <Stack className="h-[283px] relative w-[100%]">
                            <div className="absolute bg-gray_100 sm:h-[151px] md:h-[195px] h-[282px] top-[0] w-[100%]"></div>
                            <Img
                              src="images/img_background_3.png"
                              className="absolute h-[283px] left-[0] max-w-[100%] w-[100%]"
                              alt="Background Eleven"
                            />
                          </Stack>
                          <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                            <Text
                              className="capitalize font-dmsans font-medium text-gray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Textured check scarf
                            </Text>
                            <Text
                              className="font-normal font-worksans ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-red_600 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ₹680
                            </Text>
                          </Column>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                          <Stack className="bg-gray_100 h-[283px] pr-[1px] relative w-[100%]">
                            <Img
                              src="images/img_background_4.png"
                              className="absolute h-[283px] max-w-[100%] w-[100%]"
                              alt="Background Twelve"
                            />
                          </Stack>
                          <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[51%]">
                            <Text
                              className="capitalize font-medium text-gray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Men White Tee
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                              <Text
                                className="font-normal mb-[1px] not-italic text-red_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                ₹680
                              </Text>
                              <Text
                                className="font-normal line-through ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[1px] not-italic text-gray_500 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                ₹980
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[23%]">
                          <Stack className="bg-gray_100 h-[283px] pl-[1px] relative w-[100%]">
                            <Img
                              src="images/img_background_5.png"
                              className="absolute h-[283px] max-w-[100%] w-[100%]"
                              alt="Background Thirteen"
                            />
                          </Stack>
                          <Column className="flex flex-col justify-start ml-[1px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                            <Text
                              className="capitalize font-dmsans font-medium text-gray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Cycling Helmet & Gear
                            </Text>
                            <Text
                              className="font-normal font-worksans sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-red_600 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ₹680
                            </Text>
                          </Column>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[23%]">
                          <Stack className="h-[283px] relative w-[100%]">
                            <div className="absolute bg-gray_100 sm:h-[151px] md:h-[195px] h-[282px] top-[0] w-[100%]"></div>
                            <Img
                              src="images/img_background_6.png"
                              className="absolute h-[283px] max-w-[100%] w-[100%]"
                              alt="Background Fifteen"
                            />
                          </Stack>
                          <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                            <Text
                              className="capitalize font-dmsans font-medium text-gray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Casual Blazer
                            </Text>
                            <Text
                              className="font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-red_600 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ₹790 – ₹940
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                      <List
                        className="font-worksans sm:gap-[52px] md:gap-[67px] gap-[98.32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:w-[100%] w-[93%]"
                        orientation="horizontal"
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:px-[0] w-[100%]">
                          <RatingBar
                            className="mb-[1px] sm:w-[100%]"
                            value={1}
                            starCount={5}
                            size={13}
                          ></RatingBar>
                          <Text
                            className="font-light mt-[1px] text-gray_700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            (1,234 reviews)
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:px-[0] w-[100%]">
                          <RatingBar
                            className="mb-[1px] sm:w-[100%]"
                            value={1}
                            starCount={5}
                            size={13}
                          ></RatingBar>
                          <Text
                            className="font-light ml-[4px] mt-[1px] text-gray_700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            (1,234 reviews)
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:px-[0] w-[100%]">
                          <RatingBar
                            className="mb-[1px] sm:w-[100%]"
                            value={1}
                            starCount={5}
                            size={13}
                          ></RatingBar>
                          <Text
                            className="font-light ml-[4px] mt-[1px] text-gray_700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            (1,234 reviews)
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:px-[0] w-[100%]">
                          <RatingBar
                            className="mb-[1px] sm:w-[100%]"
                            value={1}
                            starCount={5}
                            size={13}
                          ></RatingBar>
                          <Text
                            className="font-light mt-[1px] text-gray_700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            (1,234 reviews)
                          </Text>
                        </Row>
                      </List>
                    </Column>
                  </Column>
                  <Column className="flex flex-col font-dmsans items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[42px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                        <Stack className="h-[283px] relative w-[100%]">
                          <div className="absolute bg-gray_100 sm:h-[151px] md:h-[195px] h-[282px] top-[0] w-[100%]"></div>
                          <Img
                            src="images/img_background_7.png"
                            className="absolute h-[283px] left-[0] max-w-[100%] w-[100%]"
                            alt="Background Seventeen"
                          />
                        </Stack>
                        <Text
                          className="capitalize font-dmsans font-medium sm:mt-[12px] md:mt-[15px] mt-[23px] text-gray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Women Long Blazer
                        </Text>
                        <Text
                          className="font-normal font-worksans ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-red_600 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          ₹680
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                          <RatingBar
                            className="mb-[1px] sm:w-[100%]"
                            value={1}
                            starCount={5}
                            size={13}
                          ></RatingBar>
                          <Text
                            className="font-light ml-[4px] mt-[1px] text-gray_700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            (1,234 reviews)
                          </Text>
                        </Row>
                      </Column>
                      <Column className="flex flex-col sm:mx-[0] pb-[1px] pr-[1px] sm:px-[0] sm:w-[100%] w-[23%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Stack className="h-[283px] relative w-[100%]">
                            <div className="absolute bg-gray_100 sm:h-[151px] md:h-[195px] h-[282px] top-[0] w-[100%]"></div>
                            <Img
                              src="images/img_background_8.png"
                              className="absolute h-[283px] max-w-[100%] right-[0] w-[100%]"
                              alt="Background Nineteen"
                            />
                          </Stack>
                          <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] pb-[1px] sm:px-[0] sm:w-[100%] w-[63%]">
                            <Text
                              className="capitalize font-medium text-gray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Combo Shirt & Tie
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                              <Text
                                className="font-normal mb-[2px] not-italic text-red_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                ₹680
                              </Text>
                              <Text
                                className="font-normal line-through ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[2px] not-italic text-gray_500 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                ₹980
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start mb-[4px] ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                          <RatingBar
                            className="mb-[1px] sm:w-[100%]"
                            value={1}
                            starCount={5}
                            size={13}
                          ></RatingBar>
                          <Text
                            className="font-light ml-[4px] mt-[1px] text-gray_700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            (1,234 reviews)
                          </Text>
                        </Row>
                      </Column>
                      <List
                        className="font-worksans sm:gap-[14px] md:gap-[18px] gap-[27.15px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[49%]"
                        orientation="horizontal"
                      >
                        <Column className="flex flex-col justify-start pb-[4px] sm:px-[0] w-[100%]">
                          <Column className="flex flex-col justify-start py-[1px] w-[100%]">
                            <Stack className="bg-gray_100 h-[282px] pl-[1px] pt-[1px] relative w-[100%]">
                              <Img
                                src="images/img_background_281X219.png"
                                className="absolute h-[281px] max-w-[100%] top-[1%] w-[100%]"
                                alt="Background Twenty"
                              />
                            </Stack>
                            <Column className="flex flex-col justify-start mb-[2px] ml-[1px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                              <Text
                                className="capitalize font-dmsans font-medium text-gray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Unisex Running Sneakers
                              </Text>
                              <Text
                                className="font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-red_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                ₹680
                              </Text>
                            </Column>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                            <RatingBar
                              className="mb-[1px] sm:w-[100%]"
                              value={1}
                              starCount={5}
                              size={13}
                            ></RatingBar>
                            <Text
                              className="font-light ml-[4px] mt-[1px] text-gray_700 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              (1,234 reviews)
                            </Text>
                          </Row>
                        </Column>
                        <Column className="flex flex-col justify-start pb-[1px] pr-[1px] sm:px-[0] w-[100%]">
                          <Column className="flex flex-col justify-start pb-[3px] sm:px-[0] w-[100%]">
                            <Stack className="h-[283px] relative w-[100%]">
                              <div className="absolute bg-gray_100 sm:h-[151px] md:h-[195px] h-[282px] top-[0] w-[100%]"></div>
                              <Img
                                src="images/img_background_9.png"
                                className="absolute h-[283px] max-w-[100%] w-[100%]"
                                alt="Background One"
                              />
                            </Stack>
                            <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                              <Text
                                className="capitalize font-dmsans font-medium text-gray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Men Khakhi Chinos
                              </Text>
                              <Text
                                className="font-normal font-worksans sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-red_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                ₹790 – ₹940
                              </Text>
                            </Column>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[4px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                            <RatingBar
                              className="mb-[1px] sm:w-[100%]"
                              value={1}
                              starCount={5}
                              size={13}
                            ></RatingBar>
                            <Text
                              className="font-light ml-[4px] mt-[1px] text-gray_700 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              (1,234 reviews)
                            </Text>
                          </Row>
                        </Column>
                      </List>
                    </Row>
                  </Column>
                </Column>
                <Img
                  src="images/img_bxbxloaderci.svg"
                  className="sm:h-[16px] md:h-[20px] h-[29px] max-w-[100%] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:w-[15px] md:w-[19px] w-[29px]"
                  alt="bxbxloaderci"
                />
              </Column>
            </Row>
            <footer className="bg-gray_900 font-dmsans sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
              <Column className="flex flex-col justify-start max-w-[1107px] sm:mb-[10px] md:mb-[13px] mb-[20px] md:ml-[131px] ml-[auto] md:mr-[97px] mr-[auto] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="capitalize cursor-pointer font-dmsans leading-[28.00px] md:leading-[normal] sm:leading-[normal] text-white_A700"
                          as="h2"
                          variant="h2"
                        >
                          Sign Up Today and get <br />
                          Rs. 200 off On your first order.
                        </Text>
                      </li>
                      <li className="w-[100%] mt-[21px] sm:mt-[11px] md:mt-[14px]">
                        <Input
                          className="cursor-pointer font-normal font-worksans not-italic p-[0] text-[14px] placeholder:text-gray_501 text-gray_501 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          type="email"
                          name="form"
                          placeholder="Enter your e-mail"
                          suffix={
                            <Img
                              src="images/img_arrowright_22X18.svg"
                              className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                              alt="arrow_right"
                            />
                          }
                        ></Input>
                      </li>
                      <li className="w-[50%] mt-[29px] ml-[1px] sm:mt-[15px] sm:w-[100%] md:mt-[19px] max-w-[100%]">
                        <Img
                          src="images/img_social1.svg"
                          className="cursor-pointer max-w-[100%]"
                          alt="SocialOne"
                        />
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[62px] ml-[91px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                    <Text
                      className="capitalize font-bold font-dmsans text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Collection
                    </Text>
                    <Text
                      className="font-light font-worksans leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Clothing
                      <br />
                      <br />
                      Tops
                      <br />
                      <br />
                      Sweaters
                      <br />
                      <br />
                      Dresses
                      <br />
                      Shoes
                      <br />
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[50px] ml-[73px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                    <Text
                      className="capitalize font-bold font-dmsans text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Company
                    </Text>
                    <Text
                      className="font-light font-worksans leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Career at Toppers
                      <br />
                      About Toppers
                      <br />
                      Contact Us
                      <br />
                      Gift Cards
                      <br />
                      Blog
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[39px] ml-[57px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Text
                      className="capitalize font-bold font-dmsans text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Need Help
                    </Text>
                    <Text
                      className="flex font-light font-worksans items-center leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Order Status
                      <br />
                      <br />
                      Shipping & Delivery
                      <br />
                      FAQ & Helps
                      <br />
                      <br />
                      Terms & Conditions
                      <br />
                      Legal & Privacy
                    </Text>
                  </Column>
                  <Column className="flex flex-col items-center justify-start md:ml-[33px] ml-[49px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                    <Column className="flex flex-col justify-start w-[100%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[auto] ml-[1px]">
                          <Text
                            className="capitalize cursor-pointer font-bold text-white_A700"
                            as="h3"
                            variant="h3"
                          >
                            Exclusive Services
                          </Text>
                        </li>
                        <li className="w-[100%] mt-[20px] sm:mt-[10px] md:mt-[13px] flex-row flex">
                          <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start">
                            <Img
                              src="images/img_call.svg"
                              className="flex-shrink-0 max-w-[100%] w-[8%]"
                              alt="call"
                            />
                            <Text
                              className="flex-grow font-light sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[2px] text-white_A700"
                              as="h4"
                              variant="h4"
                            >
                              Call Us: +1 666 8888
                            </Text>
                          </Row>
                        </li>
                        <li className="w-[88%] mt-[21px] sm:mt-[11px] sm:w-[100%] sm:mx-[0] sm:px-[0] md:mt-[14px] flex-row flex">
                          <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start">
                            <Img
                              src="images/img_mail.svg"
                              className="flex-shrink-0 max-w-[100%] w-[10%]"
                              alt="mail"
                            />
                            <Text
                              className="flex-grow font-light sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-white_A700"
                              as="h4"
                              variant="h4"
                            >
                              Send us an email
                            </Text>
                          </Row>
                        </li>
                        <li className="w-[75%] mt-[19px] sm:mt-[10px] sm:w-[100%] sm:mx-[0] sm:px-[0] md:mt-[13px] flex-row flex">
                          <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap font-worksans items-start">
                            <Img
                              src="images/img_location.svg"
                              className="flex-shrink-0 max-w-[100%] mb-[1px] w-[11%]"
                              alt="location"
                            />
                            <Text
                              className="flex-grow font-light sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[3px] text-white_A700"
                              as="h4"
                              variant="h4"
                            >
                              See our stores
                            </Text>
                          </Row>
                        </li>
                      </ul>
                    </Column>
                  </Column>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Line className="bg-gray_300 h-[1.08px] w-[100%]" />
                  <Text
                    className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-gray_500 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    <span className="text-gray_500 text-[14px] font-dmsans">
                      © 2022{" "}
                    </span>
                    <span className="text-white_A700 text-[14px] font-dmsans">
                      Toppers United
                    </span>
                    <span className="text-gray_500 text-[14px] font-dmsans">
                      . All Rights Reserved.
                    </span>
                  </Text>
                </Column>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DesignerPage;
