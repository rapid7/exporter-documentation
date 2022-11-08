

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { contrastColor } from "./doc_functionality/color"
import { convertHealthTagIfAny, sortComponentsAlphabetically } from "./doc_functionality/health"
import { firstPageFromTop, firstSubgroupOfPage, flattenedPageStructure, isExportable, nextPage, pageOrGroupActiveInContext, previousPage, isHomepage, resolveMenuLabel, getCurrentTimestamp } from "./doc_functionality/lookup"
import { markdownToHTML } from "./doc_functionality/markdown"
import { htmlSafeString, htmlSafeUrl } from "./doc_functionality/sandbox"
import { buildSearchIndexJSON } from "./doc_functionality/search"
import { highlightSafeString, withHTMLNewlines, getUrlExtension, changelogToEntries, getSearchIDString, getVariantClass } from "./doc_functionality/string_utils"
import { convertTypographyTokenToCSS, formattedTokenGroupHeader, fullTokenGroupName, gradientDescription, gradientTokenValue, measureTypeIntoReadableUnit, scaledShadowTokenValue, shadowDescription, shadowTokenValue, typographyDescription, getFormattedColor, getColorValueFromSettings } from "./doc_functionality/tokens"
import { assetUrl, textBlockPlainText, pageUrl, rootUrl, slugifyHeading, pageIdentifier } from "./doc_functionality/urls"
import { getCurrentFormattedDateTime, getFullYear } from "./doc_functionality/general-utils"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Blueprint functions

/* Local lookup */
Pulsar.registerFunction("firstSubgroupOfPage", firstSubgroupOfPage)
Pulsar.registerFunction("pageOrGroupActiveInContext", pageOrGroupActiveInContext)
Pulsar.registerFunction("flattenedPageStructure", flattenedPageStructure)
Pulsar.registerFunction("firstPageFromTop", firstPageFromTop)
Pulsar.registerFunction("previousPage", previousPage)
Pulsar.registerFunction("nextPage", nextPage)
Pulsar.registerFunction("isExportable", isExportable)
Pulsar.registerFunction("isHomepage", isHomepage)
Pulsar.registerFunction("resolveMenuLabel", resolveMenuLabel)
Pulsar.registerFunction("getCurrentTimestamp", getCurrentTimestamp)

/* General utils */
Pulsar.registerFunction("getFullYear", getFullYear)
Pulsar.registerFunction("getCurrentFormattedDateTime", getCurrentFormattedDateTime)

/* String utilities */
Pulsar.registerFunction("highlightSafeString", highlightSafeString)
Pulsar.registerFunction("withHTMLNewlines", withHTMLNewlines)
Pulsar.registerFunction("getUrlExtension", getUrlExtension)

/* Class/IDs */
Pulsar.registerFunction("getSearchIDString", getSearchIDString)
Pulsar.registerFunction("getVariantClass", getVariantClass)

/* Front-end search support */
Pulsar.registerFunction("buildSearchIndexJSON", buildSearchIndexJSON)

/* URL manipulation and support */
Pulsar.registerFunction("pageUrl", pageUrl)
Pulsar.registerFunction("pageIdentifier", pageIdentifier)
Pulsar.registerFunction("rootUrl", rootUrl)
Pulsar.registerFunction("assetUrl", assetUrl)
Pulsar.registerFunction("slugifyHeading", slugifyHeading)
Pulsar.registerFunction("textBlockPlainText", textBlockPlainText)

/* Token manipulation and formatting */
Pulsar.registerFunction("formattedTokenGroupHeader", formattedTokenGroupHeader)
Pulsar.registerFunction("fullTokenGroupName", fullTokenGroupName)
Pulsar.registerFunction("gradientDescription", gradientDescription)
Pulsar.registerFunction("gradientTokenValue", gradientTokenValue)
Pulsar.registerFunction("shadowDescription", shadowDescription)
Pulsar.registerFunction("shadowTokenValue", shadowTokenValue)
Pulsar.registerFunction("scaledShadowTokenValue", scaledShadowTokenValue)
Pulsar.registerFunction("measureTypeIntoReadableUnit", measureTypeIntoReadableUnit)
Pulsar.registerFunction("typographyDescription", typographyDescription)
Pulsar.registerFunction("convertTypographyTokenToCSS", convertTypographyTokenToCSS)
Pulsar.registerFunction("getFormattedColor", getFormattedColor)
Pulsar.registerFunction("getColorValueFromSettings", getColorValueFromSettings)

/* Markdown */
Pulsar.registerFunction("markdownToHTML", markdownToHTML)

/* Component Health */
Pulsar.registerFunction("convertHealthTagIfAny", convertHealthTagIfAny)
Pulsar.registerFunction("sortComponentsAlphabetically", sortComponentsAlphabetically)

/* Sandbox */
Pulsar.registerFunction("htmlSafeString", htmlSafeString)
Pulsar.registerFunction("htmlSafeUrl", htmlSafeUrl)

/* Colors */
Pulsar.registerFunction("contrastColor", contrastColor)

/* Release notes */
Pulsar.registerFunction("changelogToEntries", changelogToEntries)