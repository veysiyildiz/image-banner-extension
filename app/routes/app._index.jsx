import { Page, Layout, Text, Card, BlockStack } from "@shopify/polaris";
export default function Index() {
  return (
    <Page>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    My Very First Shopify app Image Banner 🎉
                  </Text>
                </BlockStack>
                <BlockStack gap="200">
                  <Text>
                    This is a simple example of a Shopify app built with Remix.
                    Created using Shopify CLI.
                  </Text>
                  <Text>
                    Simply click the Link Online Store button to view list of
                    sublinks. Go to Themes Page. And click on the Customize
                    button to configure your page and include the Image Banner
                    extension.
                  </Text>
                </BlockStack>
                <BlockStack gap="200">
                  <img
                    src="/assets/add_section.png"
                    alt="add_section"
                    width={600}
                  />
                </BlockStack>
                <BlockStack gap="200">
                  <Text>
                    Upload your images and select the product you want to show.
                  </Text>
                </BlockStack>
                <BlockStack gap="200">
                  <img
                    src="/assets/configure_section.png"
                    alt="configure_section"
                    width={600}
                  />
                </BlockStack>
                <BlockStack gap="200">
                  <Text>
                    Save your changes and view your online store to see it in
                    action.
                  </Text>
                </BlockStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
