<?php
/**
 * @file
 * Define Linkit id attribute plugin.
 */

$plugin = array(
  'name' => t('Id'),
  'callback' => 'linkit_attribute_plugin_id',
);

/**
 * Create a FAPI element.
 *
 * @param array $plugin
 *   This is the plugin definition.
 *
 * @param array $settings
 *   An array of settings for this attribute. This is from the profile settings.
 *
 * @return
 *   An FAPI element.
 *
 * @see LinkitProfile::setAttributes()
 */
function linkit_attribute_plugin_id($plugin, $settings = array()) {
  return array(
    '#type' => 'textfield',
    '#title' => $plugin['name'],
    '#maxlength' => 255,
    '#size' => 40,
    '#default_value' => '',
    '#weight' => isset($settings['weight']) ? $settings['weight'] : 0,
  );
}